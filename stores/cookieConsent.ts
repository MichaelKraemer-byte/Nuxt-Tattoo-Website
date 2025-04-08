// stores/cookieConsent.ts
import { defineStore } from "pinia";

export const useCookieConsentStore = defineStore("cookieConsent", {
  state: () => ({
    consentGiven: false,
    klaroInitialized: false,
  }),

  actions: {
    setConsent(value: boolean) {
      this.consentGiven = value;
      console.log("Consent gesetzt:", value);
    },

    openCookieSettings() {
      if (window.klaro) {
        (window.klaro as any).show();
      } else {
        console.warn("Klaro ist noch nicht geladen.");
      }
    },

    async initializeKlaro() {
      console.log("initializeKlaro inside");

      if (typeof window.klaro === "undefined") {
        await this.loadKlaroScript();
      }

      if (typeof window.klaro !== "undefined") {
        console.log("Klaro verfügbar");

        window.klaro.addEventListener("accept", () => {
          console.log("Klaro accept Event ausgelöst!");
          this.setConsent(true);
        });

        window.klaro.addEventListener("decline", () => {
          console.log("Klaro decline Event ausgelöst!");
          this.setConsent(false);
        });

        // NEU: Instagram-spezifisches Event
        window.addEventListener("load-instagram", () => {
          console.log("Event 'load-instagram' empfangen");
          this.setConsent(true);
        });

        this.klaroInitialized = true;
        console.log("Klaro wurde erfolgreich initialisiert!");
      } else {
        console.warn("Klaro ist noch nicht verfügbar.");
      }
    },

    loadKlaroScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/klaro@latest/dist/klaro.js";
        script.async = true;
        script.onload = () => {
          console.log("Klaro-Skript geladen!");
          resolve(script);
        };
        script.onerror = (err) => {
          console.warn("Fehler beim Laden des Klaro-Skripts", err);
          reject(err);
        };
        document.body.appendChild(script);
      });
    },
  },
});
