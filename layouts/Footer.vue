<template>
  <footer class="bg-gray-100 text-center py-6 text-sm text-gray-600">
    <div class="container mx-auto px-4">
      <p>© {{ new Date().getFullYear() }} Deine Webseite</p>

      <button
        @click="store.openCookieSettings"
        class="mt-2 text-blue-600 underline hover:text-blue-800"
      >
        Cookie-Einstellungen
      </button>
    </div>
  </footer>
</template>

<script setup>
import { useCookieConsentStore } from '@/stores/cookieConsent';  // Store korrekt importieren

const store = useCookieConsentStore();  // Store instanziieren
</script>
