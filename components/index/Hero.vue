<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden"
  >
    <video
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

    <!-- Transparenter Bereich für besseren Übergang zum Sternenhimmel -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-transparent pointer-events-none z-10"
    ></div>

    <!-- Inhalt -->
    <div class="relative z-20 text-center max-w-xl px-6 sm:px-8 md:px-12">
      <!-- Logo -->
      <img
        class="animate-fade-in mx-auto"
        src="/logo/mkc-tattooart.svg"
        alt="MKC Tattoo Art Logo"
        loading="eager"
        fetchpriority="high"
      />

      <div class="mt-6">
        <a
          href="#BookingForm"
          class="cinzel-500 btn btn-custom inline-block px-4 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
        >
          {{ t.hero.bookButton }}
        </a>
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
  // Lazy loading für Video
  if ("IntersectionObserver" in window) {
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
