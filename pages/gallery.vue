<template>
  <div class="relative min-h-screen py-32 sm:px-8 md:px-16 lg:px-32 xl:px-48">
    <!-- Zeige nichts, bis hydration abgeschlossen ist -->
    <div v-if="isHydrated" id="instagram-container">
      <div class="mx-auto max-w-5xl w-full">
        <iframe
          v-if="
            cookieStore.consentGiven &&
            cookieStore.instagramIframeSrc &&
            shouldLoadIframe
          "
          :src="cookieStore.instagramIframeSrc"
          allowtransparency="true"
          loading="lazy"
          class="w-full min-h-screen border-0 overflow-hidden shadow-lg rounded-lg fade-in"
          @load="onIframeLoaded"
        ></iframe>

        <div
          v-else-if="cookieStore.instagramIframeSrc === ''"
          class="fixed inset-0 flex items-center justify-center"
        >
          <div
            class="max-w-xl w-full border border-dashed border-gray-400 shadow-md rounded-lg p-6 text-center text-gray-700"
          >
            <p class="text-lg font-medium cinzel-300">
              {{ t.gallery.instagramNotVisible }}<br />
              {{ t.gallery.acceptCookies }}
              <button
                class="text-[#d4af37] hover:text-[#f4d03f] transition-colors mx-1 cursor-pointer"
                @click="openCookieBanner()"
              >
                {{ t.gallery.cookiesInBanner }}
                <span class="text-white">,</span>
              </button>
              {{ t.gallery.toShowFeed }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useCookieStore } from "../stores/cookieStore";
import { useI18n } from "~/composables/useI18n";

// Für Galerie-Seite
import { useSeoGallery } from "../composables/useSeo";
useSeoGallery();

const cookieStore = useCookieStore();
const { t } = useI18n();
const isHydrated = ref(false);
const shouldLoadIframe = ref(false);

onMounted(async () => {
  cookieStore.initializeConsentStatus();
  isHydrated.value = true;

  // Verzögertes Laden des iframes für bessere Performance
  await nextTick();
  setTimeout(() => {
    shouldLoadIframe.value = true;
  }, 100);
});

function openCookieBanner() {
  cookieStore.showCookieBanner = true;
}

function onIframeLoaded() {
  // iframe erfolgreich geladen
  console.log(t.gallery.iframeLoaded);
}
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fade-in 1s ease forwards;
}

/* Animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
