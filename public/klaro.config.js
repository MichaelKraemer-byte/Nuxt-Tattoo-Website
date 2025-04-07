var klaroConfig = {
  elementID: "klaro",
  storageMethod: "cookie",
  cookieName: "klaro",
  htmlTexts: true,
  default: false, // keine Vorauswahl
  mustConsent: true, // zeigt Banner beim ersten Besuch
  acceptAll: true,
  translations: {
    de: {
      privacyPolicyUrl: "/datenschutz",
      consentNotice: {
        description:
          "Wir verwenden Cookies und externe Dienste (z. B. Instagram), um Inhalte anzuzeigen und Funktionen bereitzustellen.",
        learnMore: "Mehr erfahren",
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
      purposes: ["social"],
      cookies: [],
      callback: function (consent, service) {
        if (consent) {
          // Hier deinen Code zum Laden des Widgets triggern
          window.dispatchEvent(new Event("load-instagram"));
        }
      },
    },
  ],
};
