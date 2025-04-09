<template>
  <div
    v-if="cookieStore.showCookieBanner"
    class="fixed bottom-0 left-0 right-0 bg-[#121212] text-white py-4 px-6 flex flex-col items-center justify-center z-50"
  >
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-lg mb-4">
        Wir verwenden Cookies, um dir das beste Erlebnis zu bieten. Bitte stimme
        zu, um fortzufahren.
      </p>

      <div class="flex justify-center gap-4">
        <button
          @click="cookieStore.acceptCookies"
          class="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Akzeptieren
        </button>
        <button
          @click="cookieStore.declineCookies"
          class="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
        >
          Ablehnen
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookieStore } from "../stores/cookieStore"; // Pinia Store importieren

// Store verwenden
const cookieStore = useCookieStore();

// Stelle sicher, dass der Zustand nachgeladen wird, nur im Browser
if (typeof window !== "undefined") {
  cookieStore.initializeConsentStatus();
}
</script>
