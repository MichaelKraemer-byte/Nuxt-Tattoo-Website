<template>
  <div>
    <!-- Wenn der Nutzer noch nicht zugestimmt hat -->
    <div
      v-if="!store.consentGiven"
      class="min-h-screen flex column items-center justify-center"
    >
      <p class="poppins-200 text-white text-lg text-center px-4">
        Um unseren Instagram-Feed zu sehen, müssen Sie der Nutzung externer
        Inhalte zustimmen.
      </p>
      <!-- CookieSettings Button -->
      <button
        @click="store.openCookieSettings"
        class="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Cookie-Settings
      </button>
    </div>

    <!-- Wenn der Nutzer zugestimmt hat -->
    <div v-else class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-32">
      <iframe
        src="https://cdn.lightwidget.com/widgets/c669fa07b7e05b1ebf5fd46a16427076.html"
        scrolling="no"
        allowtransparency="true"
        class="w-full h-[600px] border-0 overflow-hidden shadow-lg rounded-lg"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { useCookieConsentStore } from "@/stores/cookieConsent"; // Store korrekt importieren

const store = useCookieConsentStore(); // Store instanziieren
const consentGiven = store.consentGiven; // Status der Zustimmung abrufen
</script>
