<template>
  <footer
    class="bg-black/15 backdrop-blur-md py-12 shadow-md text-center text-sm text-gray-600"
  >
    <div class="container mx-auto px-4 text-gray-100 cinzel-300">
      <p class="text-gray-100 cinzel-300">
        © {{ new Date().getFullYear() }} Mika K. Consciousness
      </p>

      <div class="flex justify-center flex-wrap gap-4 mt-4">
        <button
          @click="openCookieBanner"
          class="btn-custom-2 hover:text-orange-800 cursor-pointer text-gray-100 text-lg cinzel-300"
        >
          Cookie-Einstellungen
        </button>

        <NuxtLink
          to="/shared/privacy-policy"
          class="btn-custom-2 hover:text-orange-800 cursor-pointer text-gray-100 text-lg cinzel-300"
        >
          Datenschutzerklärung
        </NuxtLink>

        <NuxtLink
          to="/shared/imprint"
          class="btn-custom-2 hover:text-orange-800 cursor-pointer text-gray-100 text-lg cinzel-300"
        >
          Impressum
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<styles scoped>

</styles>

<script setup>
import { useCookieStore } from "../../stores/cookieStore"; // Pinia Store importieren

// Store verwenden
const cookieStore = useCookieStore();

// Funktion zum Öffnen des Cookie-Banners
function openCookieBanner() {
  console.log("opencookiebanner function in footer active");
  cookieStore.showCookieBanner = true;
  console.log(cookieStore.showCookieBanner);
}
</script>
