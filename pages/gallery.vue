<template>
  <div
    class="relative min-h-[100dvh] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
  >
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
          class="fixed inset-0 flex items-center justify-center p-4"
        >
          <div
            class="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl border border-dashed border-gray-400 shadow-md rounded-lg p-4 sm:p-6 text-center text-gray-700"
          >
            <p
              class="text-sm sm:text-base md:text-lg font-medium cinzel-300 hyphens-auto leading-relaxed"
            >
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
