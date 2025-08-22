<template>
  <section
    class="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden px-4 sm:px-6 md:px-8"
  >
    <!-- Video nur auf Desktop, statisches Bild auf Mobile -->
    <video
      v-if="!isMobile"
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      class="absolute inset-0 w-full h-full object-cover opacity-30"
      @loadeddata="onVideoLoaded"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      {{ t.hero.videoNotSupported }}
    </video>

    <!-- Statisches Bild für Mobile -->
    <div
      v-else
      class="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] opacity-30"
    ></div>

    <!-- Transparenter Bereich für besseren Übergang zum Sternenhimmel -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-transparent pointer-events-none z-10"
    ></div>

    <!-- Inhalt -->
    <div
      class="relative z-20 text-center w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl"
    >
      <!-- Logo -->
      <img
        class="animate-fade-in mx-auto cinematic-heading hyphens-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
        src="/logo/mkc-tattooart.svg"
        alt="MKC Tattoo Art Logo"
        loading="eager"
        fetchpriority="high"
      />

      <div
        class="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center"
      >
        <a
          href="#BookingForm"
          class="cinzel-500 cta-button cta-button-primary cta-button-glow inline-block w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl font-bold text-white rounded-lg sm:rounded-xl shadow-[0_4px_16px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          {{ t.hero.bookButton }}
        </a>

        <a
          href="/gallery"
          class="cinzel-500 cta-button cta-button-secondary inline-block w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-2.5 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-[0_2px_8px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] transition-all duration-300"
        >
          {{ t.hero.galleryButton }}
        </a>
      </div>
    </div>
    <!-- Scroll-Hinweis -->
    <div
      class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div class="flex flex-col items-center text-white/70 animate-bounce">
        <span class="text-xs sm:text-sm mb-1 sm:mb-2 cinzel-300 hyphens-auto"
          >Scroll</span
        >
        <svg
          class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "~/composables/useI18n";
import "assets/css/main.scss";

const { t } = useI18n();
const videoRef = ref(null);
const isMobile = ref(false);

const onVideoLoaded = () => {
  // Video ist geladen und kann abgespielt werden
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Fallback für Browser, die autoplay nicht unterstützen
      console.log("Autoplay nicht unterstützt");
    });
  }
};

onMounted(() => {
  // Mobile-Erkennung
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  // Video nur laden wenn nicht Mobile
  if (!isMobile.value && videoRef.value) {
    videoRef.value.play().catch(() => {
      console.log("Autoplay nicht unterstützt");
    });
  }

  // Lazy loading für Video
  if ("IntersectionObserver" in window && !isMobile.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.value) {
          videoRef.value.load();
          observer.unobserve(entry.target);
        }
      });
    });

    if (videoRef.value) {
      observer.observe(videoRef.value);
    }
  }
});
</script>
