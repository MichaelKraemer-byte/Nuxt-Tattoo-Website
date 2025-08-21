import { ref, computed } from "vue";
import de from "~/locales/de.json";
import en from "~/locales/en.json";

export const useI18n = () => {
  // Verfügbare Sprachen
  const languages = {
    de: { name: "Deutsch", flag: "🇩🇪", locale: de },
    en: { name: "English", flag: "🇺🇸", locale: en },
  };

  // Aktuelle Sprache (Standard: Deutsch)
  const currentLanguage = ref<"de" | "en">("de");

  // Sprache aus localStorage laden
  if (process.client) {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
      currentLanguage.value = savedLanguage;
    }
  }

  // Aktuelle Übersetzungen
  const t = computed(() => {
    return languages[currentLanguage.value].locale;
  });

  // Sprache wechseln
  const changeLanguage = (lang: "de" | "en") => {
    currentLanguage.value = lang;
    if (process.client) {
      localStorage.setItem("language", lang);
      // Seite neu laden für bessere Performance
      window.location.reload();
    }
  };

  // Aktuelle Sprache-Info
  const currentLanguageInfo = computed(() => {
    return languages[currentLanguage.value];
  });

  // Verfügbare Sprachen für UI
  const availableLanguages = computed(() => {
    return Object.entries(languages).map(([key, value]) => ({
      key,
      ...value,
    }));
  });

  return {
    t,
    currentLanguage,
    currentLanguageInfo,
    availableLanguages,
    changeLanguage,
    languages,
  };
};

