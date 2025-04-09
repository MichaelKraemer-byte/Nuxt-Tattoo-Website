import { defineStore } from "pinia";
import { ref } from "vue";

export const useCookieStore = defineStore("cookieStore", () => {
  // Zustand des Cookie-Banners
  const consentGiven = ref(false);
  const showCookieBanner = ref(false);

  // Instagram Feed iframe-URL
  const instagramIframeSrc = ref("");

  // Sicherstellen, dass der Status der Zustimmung nachgeladen wird, nur im Browser
  const initializeConsentStatus = () => {
    if (typeof window !== "undefined") {
      // Sicherstellen, dass der Code nur im Browser läuft
      const consentStatus = localStorage.getItem("cookiesAccepted");
      if (consentStatus === "true") {
        consentGiven.value = true;
      } else if (consentStatus === "false") {
        consentGiven.value = false;
      }
    }
  };

  // Zustimmung akzeptieren
  const acceptCookies = () => {
    consentGiven.value = true;
    showCookieBanner.value = false;
    console.log(showCookieBanner.value);
    console.log("accepted");

    if (typeof window !== "undefined") {
      // Sicherstellen, dass der Code nur im Browser läuft
      localStorage.setItem("cookiesAccepted", "true");
    }
    instagramIframeSrc.value =
      "https://cdn.lightwidget.com/widgets/c669fa07b7e05b1ebf5fd46a16427076.html"; // Instagram Feed URL
  };

  // Zustimmung ablehnen
  const declineCookies = () => {
    consentGiven.value = false;
    showCookieBanner.value = false;
    console.log(showCookieBanner.value);
    console.log("declined");
    debugger;
    if (typeof window !== "undefined") {
      // Sicherstellen, dass der Code nur im Browser läuft
      localStorage.setItem("cookiesAccepted", "false");
    }
    instagramIframeSrc.value = ""; // Instagram Feed deaktivieren
  };

  // Funktion zum Zurücksetzen der Zustimmung
  const resetConsentStatus = () => {
    consentGiven.value = false;
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookiesAccepted"); // Entferne die gespeicherte Zustimmung aus localStorage
    }
  };

  return {
    consentGiven,
    showCookieBanner,
    instagramIframeSrc,
    initializeConsentStatus,
    acceptCookies,
    declineCookies,
    resetConsentStatus,
  };
});
