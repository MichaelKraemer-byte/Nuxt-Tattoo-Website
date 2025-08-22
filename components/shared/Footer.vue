<template>
  <footer
    class="bg-black/15 backdrop-blur-md py-12 shadow-md text-center text-sm text-gray-600 mt-auto"
  >
    <div class="container mx-auto px-4 text-gray-100 cinzel-300">
      <p class="text-gray-100 cinzel-300">
        {{ t.footer.copyright }}
      </p>

      <div class="flex justify-center flex-wrap gap-4 mt-4">
        <button
          @click="openCookieBanner"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-lg cinzel-300"
        >
          {{ t.cookieBanner.title }}
        </button>

        <NuxtLink
          to="/shared/privacy-policy"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-lg cinzel-300"
        >
          {{ t.navigation.privacyPolicy }}
        </NuxtLink>

        <NuxtLink
          to="/shared/imprint"
          class="btn-custom-2 hover:text-[#d4af37] cursor-pointer text-gray-100 text-lg cinzel-300"
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
