import { defineStore } from "pinia";
import { ref } from "vue";

// Hilfsfunktionen zum Setzen, Abrufen und Löschen von Cookies
function setCookie(name, value, days) {
  if (typeof window !== "undefined") {
    // Sicherstellen, dass der Code im Browser ausgeführt wird
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Ablaufdatum
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
}

function getCookie(name) {
  if (typeof window !== "undefined") {
    // Sicherstellen, dass der Code im Browser ausgeführt wird
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
  }
  return null; // Rückgabe null, falls wir uns im SSR befinden
}

function eraseCookie(name) {
  if (typeof window !== "undefined") {
    // Sicherstellen, dass der Code im Browser ausgeführt wird
    document.cookie = `${name}=; Max-Age=-1; path=/`;
  }
}

export const useCookieStore = defineStore("cookieStore", () => {
  const consentGiven = ref(false);
  const showCookieBanner = ref(false);
  const instagramIframeSrc = ref("");

  // Sicherstellen, dass der Status der Zustimmung nachgeladen wird
  const initializeConsentStatus = () => {
    if (typeof window !== "undefined") {
      const consentStatus = getCookie("cookiesAccepted");

      if (consentStatus === "true") {
        consentGiven.value = true;
        showCookieBanner.value = false;
      } else if (consentStatus === "false") {
        consentGiven.value = false;
        showCookieBanner.value = false;
      } else {
        // Kein Cookie vorhanden → Banner anzeigen
        showCookieBanner.value = true;
      }
    }
  };

  const loadLightWidgetScript = () => {
    if (
      typeof window !== "undefined" &&
      !document.getElementById("lightwidget-script")
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.id = "lightwidget-script";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  const acceptCookies = () => {
    consentGiven.value = true;
    showCookieBanner.value = false;
    setCookie("cookiesAccepted", "true", 365);
    instagramIframeSrc.value =
      "https://cdn.lightwidget.com/widgets/c669fa07b7e05b1ebf5fd46a16427076.html";
    loadLightWidgetScript(); // ← wichtig
  };

  const declineCookies = () => {
    consentGiven.value = false;
    showCookieBanner.value = false;
    setCookie("cookiesAccepted", "false", 365); // Zustimmung ablehnen und Cookie setzen
    instagramIframeSrc.value = ""; // Instagram Feed deaktivieren
    window.location.reload();
  };

  const resetConsentStatus = () => {
    consentGiven.value = false;
    showCookieBanner.value = true;
    eraseCookie("cookiesAccepted"); // Entferne das Cookie
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
