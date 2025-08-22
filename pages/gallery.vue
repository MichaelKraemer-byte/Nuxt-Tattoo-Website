<template>
  <div
    class="relative min-h-[100dvh] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
  >
    <!-- Hero Section -->
    <section class="text-center mb-16 fade-in">
      <!-- Auge Icon -->
      <div class="flex justify-center mb-8">
        <img
          src="/img/auge.png"
          alt="Das Auge - Symbol der Gegenwärtigkeit"
          class="w-20 md:w-24 h-auto scale-x-[-1] opacity-80"
        />
      </div>

      <!-- Haupttitel -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold cinzel-700 text-white mb-6 cinematic-heading"
      >
        {{ currentLanguage === "en" ? "Gallery" : "Galerie" }}
      </h1>

      <!-- Untertitel -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-gray-300 poppins-300 max-w-4xl mx-auto leading-relaxed hyphens-auto mb-8"
      >
        <span v-if="currentLanguage === 'en'">
          Discover the latest tattoo creations and artworks in my Instagram
          gallery
        </span>
        <span v-else>
          Entdecke die neuesten Tattoo-Kreationen und Kunstwerke in meiner
          Instagram-Galerie
        </span>
      </p>

      <!-- Dekorative Linie -->
      <div
        class="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"
      ></div>
    </section>

    <!-- Zeige nichts, bis hydration abgeschlossen ist -->
    <div v-if="isHydrated" id="instagram-container">
      <div class="mx-auto max-w-5xl w-full">
        <div
          v-if="
            cookieStore.consentGiven &&
            cookieStore.instagramIframeSrc &&
            shouldLoadIframe
          "
          class="instagram-feed-container"
        >
          <!-- Instagram Feed Header mit Animation -->
          <div class="feed-header feed-in-animation">
            <div class="flex items-center justify-center mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mr-3 feed-icon-animation"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014-3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white cinzel-600">
                Instagram Feed
              </h3>
            </div>
          </div>

          <!-- Instagram iframe mit Animation -->
          <iframe
            :src="cookieStore.instagramIframeSrc"
            allowtransparency="false"
            loading="lazy"
            class="w-full min-h-screen pb-4 border-0 overflow-hidden shadow-2xl rounded-2xl feed-iframe-animation bg-black/10 backdrop-blur-sm"
            @load="onIframeLoaded"
          ></iframe>
        </div>

        <div
          v-else-if="cookieStore.instagramIframeSrc === ''"
          class="text-center py-16 backdrop-blur-sm bg-black/20 rounded-3xl border border-white/20 p-8 shadow-xl"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37]/20 rounded-full mb-4"
          >
            <svg
              class="w-8 h-8 text-[#d4af37]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014-3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </div>
          <p class="text-gray-400 poppins-300 mb-6">
            {{ t.gallery.instagramNotVisible }}
          </p>
          <button
            @click="openCookieBanner"
            class="cinzel-500 cta-button cta-button-secondary inline-block w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-2.5 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-[0_2px_8px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Instagram-Cookies akzeptieren
          </button>
        </div>
      </div>
    </div>

    <!-- Cookie Banner (wenn geöffnet) -->
    <div class="z-50">
      <CookieBanner v-if="cookieStore.showCookieBanner" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useCookieStore } from "../stores/cookieStore";
import { useI18n } from "~/composables/useI18n";
import CookieBanner from "~/components/CookieBanner.vue";

// Für Galerie-Seite
import { useSeoGallery } from "../composables/useSeo";
useSeoGallery();

const cookieStore = useCookieStore();
const { t, currentLanguage } = useI18n();
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

/* Instagram Feed Animationen */
.instagram-feed-container {
  position: relative;
  overflow: hidden;
}

.feed-header {
  margin-bottom: 2rem;
}

.feed-in-animation {
  opacity: 0;
  animation: feed-slide-in 1.2s ease-out 0.3s forwards;
}

.feed-icon-animation {
  animation: icon-bounce 0.8s ease-out 0.8s both;
}

.feed-iframe-animation {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: iframe-feed-in 1.5s ease-out 0.6s forwards;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Feed Slide-in Animation */
@keyframes feed-slide-in {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Icon Bounce Animation */
@keyframes icon-bounce {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-180deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(-90deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Iframe Feed-in Animation */
@keyframes iframe-feed-in {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  50% {
    opacity: 0.7;
    transform: translateY(15px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Hover-Effekte */
.feed-header:hover .feed-icon-animation {
  transform: scale(1.1) rotate(5deg);
  transition: transform 0.3s ease;
}

.feed-iframe-animation:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
</style>
