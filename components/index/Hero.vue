<template>
  <section
    class="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden px-4 sm:px-6 md:px-8"
  >
    <!-- Video mit adaptiver Qualität -->
    <video
      v-if="shouldShowVideo"
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      :preload="videoPreload"
      class="absolute inset-0 w-full h-full object-cover opacity-30"
      @loadeddata="onVideoLoaded"
      @error="onVideoError"
    >
      <!-- WebM für bessere Kompression -->
      <source
        v-if="videoQuality === 'high'"
        src="/videos/hero-video.mp4"
        type="video/mp4"
      />
      <!-- Fallback für ältere Browser -->
      <source v-else src="/videos/hero-video.mp4" type="video/mp4" />
      {{ t.hero.videoNotSupported }}
    </video>

    <!-- Statisches Bild für Mobile/Performance-Modus -->
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
          class="cinzel-500 cta-button cta-button-primary cta-button-glow inline-block w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 text-lg sm:text-lg md:text-xl font-bold text-white rounded-lg sm:rounded-xl shadow-[0_4px_16px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          {{ t.hero.bookButton }}
        </a>

        <a
          href="/gallery"
          class="cinzel-500 cta-button cta-button-secondary inline-block w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-2.5 text-base sm:text-base md:text-lg font-semibold rounded-lg shadow-[0_2px_8px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] transition-all duration-300"
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
import { ref, onMounted, computed } from "vue";
import { useI18n } from "~/composables/useI18n";
import "assets/css/main.scss";

const { t } = useI18n();
const videoRef = ref(null);
const isMobile = ref(false);
const networkSpeed = ref("unknown");
const batteryLevel = ref(1);
const videoQuality = ref("high");
const shouldShowVideo = ref(false);
const videoPreload = ref("metadata");

// Intelligente Entscheidung, ob Video angezeigt werden soll
const determineVideoStrategy = () => {
  // Mobile-Geräte: Kein Video
  if (isMobile.value) {
    shouldShowVideo.value = false;
    return;
  }

  // Netzwerk-basierte Entscheidung
  if (networkSpeed.value === "slow" || networkSpeed.value === "2g") {
    shouldShowVideo.value = false;
    videoPreload.value = "none";
    return;
  }

  // Akku-basierte Entscheidung
  if (batteryLevel.value < 0.2) {
    shouldShowVideo.value = false;
    videoPreload.value = "none";
    return;
  }

  // Performance-Modus für mittlere Netzwerke
  if (networkSpeed.value === "3g") {
    shouldShowVideo.value = true;
    videoQuality.value = "medium";
    videoPreload.value = "metadata";
  } else {
    // 4G/5G: Vollständige Qualität
    shouldShowVideo.value = true;
    videoQuality.value = "high";
    videoPreload.value = "metadata";
  }
};

// Netzwerk-Geschwindigkeit erkennen
const detectNetworkSpeed = async () => {
  if ("connection" in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType) {
      switch (connection.effectiveType) {
        case "slow-2g":
        case "2g":
          networkSpeed.value = "2g";
          break;
        case "3g":
          networkSpeed.value = "3g";
          break;
        case "4g":
          networkSpeed.value = "4g";
          break;
        default:
          networkSpeed.value = "fast";
      }
    } else if (connection.downlink) {
      if (connection.downlink < 1) networkSpeed.value = "slow";
      else if (connection.downlink < 2) networkSpeed.value = "3g";
      else networkSpeed.value = "fast";
    }
  } else {
    // Fallback: Annahme basierend auf Gerät
    networkSpeed.value = isMobile.value ? "3g" : "fast";
  }
};

// Akku-Status erkennen
const detectBatteryStatus = async () => {
  if ("getBattery" in navigator) {
    try {
      const battery = await navigator.getBattery();
      batteryLevel.value = battery.level;

      battery.addEventListener("levelchange", () => {
        batteryLevel.value = battery.level;
        determineVideoStrategy();
      });
    } catch (error) {
      console.log("Battery API nicht verfügbar");
    }
  }
};

// Mobile-Erkennung verbessern
const detectMobile = () => {
  const userAgent = navigator.userAgent;
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  const isSmallScreen = window.innerWidth < 768;
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  isMobile.value = isMobileDevice || isSmallScreen || isTouchDevice;
};

const onVideoLoaded = () => {
  if (videoRef.value && shouldShowVideo.value) {
    videoRef.value.play().catch(() => {
      console.log("Autoplay nicht unterstützt");
    });
  }
};

const onVideoError = () => {
  console.warn(
    "Video konnte nicht geladen werden, fallback zu statischem Bild"
  );
  shouldShowVideo.value = false;
};

onMounted(async () => {
  // Mobile-Erkennung
  detectMobile();

  // Netzwerk und Akku erkennen
  await detectNetworkSpeed();
  await detectBatteryStatus();

  // Video-Strategie bestimmen
  determineVideoStrategy();

  // Event-Listener für Resize
  window.addEventListener("resize", () => {
    detectMobile();
    determineVideoStrategy();
  });

  // Netzwerk-Änderungen überwachen
  if ("connection" in navigator) {
    navigator.connection.addEventListener("change", detectNetworkSpeed);
  }

  // Lazy loading für Video (nur wenn Video angezeigt werden soll)
  if ("IntersectionObserver" in window && shouldShowVideo.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.value && shouldShowVideo.value) {
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
