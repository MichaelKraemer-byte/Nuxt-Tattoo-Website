<template>
  <div>
    <!-- Section 1 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col lg:flex-row items-center pt-40 sm:pt-60 lg:pt-96 gap-12 sm:gap-16 lg:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-1"
        >
          <div class="col-span-2 sm:col-span-3 flex justify-center">
            <NuxtImg
              format="webp"
              src="/img/tung-monster.png"
              alt="Tattoo Galerie"
              class="w-full max-w-[420px] h-auto object-contain swinging transition-transform duration-500 ease-in-out hover:scale-150 hover:z-10 active:scale-150"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight cinzel-500"
          >
            Fantasy, Mythology & Folklore
          </h2>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed cinzel-300"
          >
            „Ich erschaffe Kreaturen und Wesen in allen Formen, Sagen und
            Legenden, schreibe über sie Geschichten und erwecke sie zum Leben."
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 2 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col lg:flex-row-reverse items-center pt-24 sm:pt-36 gap-12 sm:gap-16 lg:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-left"
          class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-1"
        >
          <div class="col-span-2 sm:col-span-3 flex justify-center">
            <NuxtImg
              format="webp"
              src="/img/arms-of-soulway.PNG"
              alt="Tattoo Galerie"
              class="w-auto max-h-[700px] object-contain swinging spin-slow transition-transform duration-500 ease-in-out hover:scale-150 hover:z-10 active:scale-150"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 sm:px-4"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight cinzel-500"
          >
            Mindfulness, Nature & Awakening
          </h2>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed cinzel-300"
          >
            „In ornamentaler Anordnung verbinde ich symbolisch Anatomie, Natur
            und Spiritualität zu einem künstlerischen Ausdruck von Achtsamkeit
            und Verbundenheit. Meine spirituellen Tattoos erinnern dich an die
            Kraft des Augenblicks.“
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 1 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col lg:flex-row items-center pt-24 sm:pt-36 pb-36 sm:pb-56 gap-12 sm:gap-16 lg:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-1"
        >
          <div class="col-span-2 sm:col-span-3 flex justify-center">
            <NuxtImg
              format="webp"
              src="img/helping-plant.png"
              alt="Tattoo Galerie"
              class="w-full max-w-[320px] h-auto object-contain swinging-2 transition-transform duration-500 ease-in-out hover:scale-150 hover:z-10 active:scale-150"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight cinzel-500"
          >
            As you wish
          </h2>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed cinzel-300"
          >
            „Sende mir einen Raben.<br />
            So lasset uns ein Kunstwerk auf deiner Haut erschaffen, das deinen
            Vorstellungen entspricht und welches meinen Zauber inne hält."
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

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
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
