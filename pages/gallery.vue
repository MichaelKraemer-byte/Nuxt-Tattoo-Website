<template>
  <div
    class="relative min-h-screen py-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
  >
    <!-- Zeige nichts, bis hydration abgeschlossen ist -->
    <div v-if="isHydrated" id="instagram-container">
      <iframe
        v-if="cookieStore.consentGiven && cookieStore.instagramIframeSrc"
        :src="cookieStore.instagramIframeSrc"
        allowtransparency="true"
        class="w-full min-h-screen border-0 overflow-hidden shadow-lg rounded-lg"
      ></iframe>

      <div
        v-else-if="cookieStore.instagramIframeSrc === ''"
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
import { ref, onMounted } from "vue";
import { useCookieStore } from "../stores/cookieStore";

const cookieStore = useCookieStore();
const isHydrated = ref(false); // Wird true, sobald wir im Browser sind

onMounted(() => {
  cookieStore.initializeConsentStatus();
  isHydrated.value = true;
});

function openCookieBanner() {
  cookieStore.showCookieBanner = true;
}
</script>
