<template>
  <div class="relative min-h-screen py-32 sm:px-8 md:px-16 lg:px-32 xl:px-48">
    <!-- Zeige nichts, bis hydration abgeschlossen ist -->
    <div v-if="isHydrated" id="instagram-container">
      <div class="mx-auto max-w-5xl w-full">
        <iframe
          v-if="cookieStore.consentGiven && cookieStore.instagramIframeSrc"
          :src="cookieStore.instagramIframeSrc"
          allowtransparency="true"
          class="w-full min-h-screen border-0 overflow-hidden shadow-lg rounded-lg"
        ></iframe>

        <div
          v-else-if="cookieStore.instagramIframeSrc === ''"
          class="fixed inset-0 flex items-center justify-center"
        >
          <div
            class="max-w-xl w-full border border-dashed border-gray-400 shadow-md rounded-lg p-6 text-center text-gray-700"
          >
            <p class="text-lg font-medium cinzel-300">
              📌 Instagram-Inhalte sind gerade nicht sichtbar.<br />
              Bitte akzeptiere die
              <button
                class="text-orange-400 hover:text-orange-300 transition-colors mx-1 cursor-pointer"
                @click="openCookieBanner()"
              >
                Cookies im Banner
                <span class="text-white">,</span>
              </button>
              um den Feed anzuzeigen.
            </p>
          </div>
        </div>
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
