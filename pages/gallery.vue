<template>
  <div
    class="relative min-h-screen py-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
  >
    <div id="instagram-container" v-if="cookieStore.consentGiven">
      <!-- Instagram Feed iframe wird nur angezeigt, wenn Zustimmung erteilt wurde -->
      <iframe
        v-if="cookieStore.instagramIframeSrc"
        :src="cookieStore.instagramIframeSrc"
        allowtransparency="true"
        class="w-full min-h-screen border-0 overflow-hidden shadow-lg rounded-lg"
      ></iframe>

      <!-- Hinweistext, falls Instagram-URL noch nicht gesetzt wurde -->
      <div
        v-else
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-full border border-dashed border-gray-400 shadow-md rounded-lg p-6 text-center text-gray-700"
      >
        <p class="text-lg font-medium">
          📌 Instagram-Inhalte sind gerade nicht sichtbar.<br />
          Bitte akzeptiere die
          <button
            class="text-orange-400 hover:text-orange-300 transition-colors mx-1 cursor-pointer"
            @click="openCookieBanner()"
          >
            Cookies im Banner
          </button>
          , um den Feed anzuzeigen.
        </p>
      </div>
    </div>
  </div>
</template>

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
