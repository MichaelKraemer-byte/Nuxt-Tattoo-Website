// plugins/klaro.client.js

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Klaro Script via CDN laden
    const script = document.createElement("script");
    script.src = "https://cdn.kiprotect.com/klaro/v0.7/klaro.js";
    script.defer = true;
    script.onload = () => {
      console.log("[Klaro] Script geladen.");
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
