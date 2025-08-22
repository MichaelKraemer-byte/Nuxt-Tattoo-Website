<template>
  <footer
    class="bg-black/15 backdrop-blur-md py-8 sm:py-10 md:py-12 shadow-md text-center text-xs sm:text-sm text-gray-600 mt-auto"
  >
    <div
      class="container mx-auto px-3 sm:px-4 md:px-6 text-gray-100 cinzel-300"
    >
      <p class="text-gray-100 cinzel-300 hyphens-auto leading-relaxed">
        {{ t.footer.copyright }}
      </p>

      <div
        class="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4"
      >
        <button
          @click="openCookieBanner"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-sm sm:text-base md:text-lg cinzel-300 hyphens-auto leading-relaxed"
        >
          {{ t.cookieBanner.title }}
        </button>

        <NuxtLink
          to="/shared/privacy-policy"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-sm sm:text-base md:text-lg cinzel-300 hyphens-auto leading-relaxed"
        >
          {{ t.navigation.privacyPolicy }}
        </NuxtLink>

        <NuxtLink
          to="/shared/imprint"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-sm sm:text-base md:text-lg cinzel-300 hyphens-auto leading-relaxed"
        >
          {{ t.navigation.imprint }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<styles scoped>

</styles>

<script setup>
import { useCookieStore } from "../../stores/cookieStore";
import { useI18n } from "~/composables/useI18n";

// Store verwenden
const cookieStore = useCookieStore();
const { t } = useI18n();

// Funktion zum Öffnen des Cookie-Banners
function openCookieBanner() {
  cookieStore.showCookieBanner = true;
}
</script>
