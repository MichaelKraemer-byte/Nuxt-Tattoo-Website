// plugins/klaro.client.js

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const store = useCookieConsentStore(); // Dein Pinia-Store importieren
    window.store = store; // Den Store ins globale Window-Objekt setzen

    // Klaro Script laden
    const script = document.createElement("script");
    script.src = "https://cdn.kiprotect.com/klaro/v0.7/klaro.js";
    script.defer = true;
    script.onload = () => {
      console.log("[Klaro] Script geladen.");

      // Wenn Klaro verfügbar ist, den 'decline' Event Listener hinzufügen
      if (window.klaro) {
        window.klaro.addEventListener("decline", () => {
          console.log("Zustimmung abgelehnt!");

          // Hier setzen wir den Konsens im Pinia-Store auf false
          store.setConsent(false);

          // Und dann die Seite neu laden
          window.location.reload(); // Seite neu laden
        });
      }
    };
    document.head.appendChild(script);

    // Klaro-Konfig im globalen Window-Objekt bereitstellen
    window.klaroConfig = {
      elementID: "klaro",
      storageMethod: "cookie",
      cookieName: "klaro",
      htmlTexts: true,
      default: false,
      mustConsent: true,
      acceptAll: true,
      hideDeclineAll: false,
      privacyPolicy: "/privacy-policy",

      translations: {
        de: {
          privacyPolicyUrl: "/privacy-policy",
          consentNotice: {
            description:
              "Wir verwenden Cookies und externe Dienste (z. B. Instagram), um Inhalte anzuzeigen und Funktionen bereitzustellen.",
            learnMore: "Mehr erfahren",
          },
          consentModal: {
            title: "Datenschutzeinstellungen",
            description:
              "Hier kannst du auswählen, welche Dienste du zulassen möchtest. Du kannst deine Entscheidung jederzeit ändern.",
          },
          purposes: {
            social: "Soziale Medien",
          },
          services: {
            instagram: {
              description: "Instagram Feed eingebettet über LightWidget.",
            },
          },
        },
      },

      services: [
        {
          name: "instagram",
          default: false,
          title: "Instagram Feed",
          purposes: ["social media"],
          cookies: [],
          callback: function (consent, service) {
            if (consent) {
              // Event dispatchen, das z. B. deine Komponente hören kann
              window.dispatchEvent(new Event("load-instagram"));
            }
          },
        },
      ],
    };
  }
});
