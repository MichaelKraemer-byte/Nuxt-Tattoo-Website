<script setup>
import { useCookieStore } from "../stores/cookieStore"; // Pinia Store importieren

// Store verwenden
const cookieStore = useCookieStore();

// Funktion zum Öffnen des Cookie-Banners
function openCookieBanner() {
  console.log("opencookiebanner function in footer active");
  cookieStore.showCookieBanner = true;
  console.log(cookieStore.showCookieBanner);
}
</script>

<template>
  <footer class="bg-gray-100 text-center py-6 text-sm text-gray-600">
    <div class="container mx-auto px-4">
      <p>© {{ new Date().getFullYear() }} Deine Webseite</p>

      <button
        @click="openCookieBanner"
        class="mt-2 text-blue-600 underline hover:text-blue-800"
      >
        Cookie-Einstellungen
      </button>
    </div>
  </footer>
</template>
