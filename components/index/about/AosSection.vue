<template>
  <div>
    <!-- Section 1 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col lg:flex-row items-center pt-20 sm:pt-32 md:pt-40 lg:pt-60 xl:pt-80 2xl:pt-96 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 overflow-hidden lg:overflow-visible"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2"
        >
          <div
            class="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center"
          >
            <img
              src="/img/tung-monster.png"
              alt="Tattoo Galerie"
              class="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain swinging transition-transform duration-500 ease-in-out md:hover:scale-125 hover:z-10 lg:active:scale-125"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4"
        >
          <div class="flex items-center w-full text-center flex-col">
            <img
              src="/img/auge.png"
              class="w-12 md:w-32 h-auto mb-4 scale-x-[-1]"
            />
            <h2
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-white mx-2 sm:mx-3 lg:mx-6 cinematic-heading hyphens-auto"
            >
              {{ t.aos.features.artistic.title }}
            </h2>
          </div>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed poppins-300 text-center hyphens-auto"
          >
            {{ t.aos.features.artistic.description }}
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 2 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col lg:flex-row-reverse items-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 overflow-hidden lg:overflow-visible"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-left"
          class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-1"
        >
          <div class="col-span-2 sm:grid-cols-3 flex justify-center">
            <img
              src="/img/arms-of-soulway.PNG"
              alt="Tattoo Galerie"
              class="w-auto max-h-[700px] object-contain swinging spin-slow transition-transform duration-500 ease-in-out md:hover:scale-125 hover:z-10 md:active:scale-125"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:px-2 sm:px-4"
        >
          <div class="flex items-center w-full text-center flex-col">
            <img
              src="/img/auge.png"
              class="w-12 md:w-32 h-auto mb-4 scale-x-[-1]"
            />
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white mx-3 lg:mx-6 cinematic-heading"
            >
              {{ t.aos.features.spiritual.title }}
            </h2>
          </div>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed poppins-300 text-center"
          >
            {{ t.aos.features.spiritual.description }}
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 3 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-hidden lg:overflow-visible flex flex-col lg:flex-row items-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 pb-20 sm:pb-32 md:pb-40 lg:pb-48 xl:pb-56 2xl:pb-64 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-1"
        >
          <div class="col-span-2 sm:col-span-3 flex justify-center">
            <img
              src="/img/helping-plant.png"
              alt="Tattoo Galerie"
              class="w-full max-w-[320px] h-auto object-contain swinging-2 transition-transform duration-500 ease-in-out md:hover:scale-125 hover:z-10 md:active:scale-125"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left lg:px-2 sm:px-4"
        >
          <div class="flex items-center w-full text-center flex-col">
            <img
              src="/img/auge.png"
              class="w-12 md:w-32 h-auto mb-4 scale-x-[-1]"
            />
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white mx-3 lg:mx-6 cinematic-heading"
            >
              {{ t.aos.features.quality.title }}
            </h2>
          </div>
          <p
            class="text-base sm:text-lg text-white/80 leading-relaxed poppins-300 text-center"
          >
            {{ t.aos.features.quality.description }}
          </p>
        </div>
      </section>
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();

onMounted(() => {
  // Mobile-Erkennung für Performance
  const isMobile = window.innerWidth < 768;

  AOS.init({
    duration: isMobile ? 400 : 800, // Schnellere Animationen auf Mobile
    once: true,
    disable: isMobile ? "mobile" : false, // AOS auf Mobile deaktivieren
    offset: isMobile ? 50 : 100, // Kleinere Offset auf Mobile
  });
});
</script>

<style scoped>
@keyframes slow-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 1024px) {
  .spin-slow {
    animation: slow-spin 80s linear infinite !important;
  }
}

@keyframes swing-rotate {
  0% {
    transform: rotate(8.5deg);
  }
  50% {
    transform: rotate(-8.5deg);
  }
  100% {
    transform: rotate(8.5deg);
  }
}

.swinging {
  animation: swing-rotate 12s ease-in-out infinite;
}

@keyframes swing-rotate-2 {
  0% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(4deg);
  }
}

.swinging-2 {
  animation: swing-rotate-2 12s ease-in-out infinite;
}
</style>
