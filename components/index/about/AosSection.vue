<template>
  <div>
    <!-- Section 1 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-6 sm:px-10 md:px-16 xl:px-32 flex flex-col lg:flex-row items-center py-36 gap-16 lg:gap-24"
      >
        <!-- Bild -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 flex lg:justify-start justify-center"
        >
          <NuxtImg
            src="/img/freshTattoos/1.jpg"
            alt="Tattoo Detail"
            class="rounded-xl shadow-xl w-full max-w-[420px] aspect-[3/4] object-cover"
          />
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Feinste Linien. Klare Formen.
          </h2>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
            Jede Linie ist bewusst gesetzt. Ich arbeite präzise, ruhig und mit
            Respekt vor deiner Haut.
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 2 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-6 sm:px-10 md:px-16 xl:px-32 flex flex-col lg:flex-row-reverse items-center py-36 gap-16 lg:gap-24"
      >
        <!-- Bild -->
        <div
          data-aos="fade-left"
          class="w-full lg:w-1/2 flex lg:justify-end justify-center"
        >
          <NuxtImg
            src="/img/freshTattoos/2.jpg"
            alt="Tattoo Detail 2"
            class="rounded-xl shadow-xl w-full max-w-[420px] aspect-[3/4] object-cover"
          />
        </div>

        <!-- Text -->
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Deine Haut als Leinwand.
          </h2>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
            Meine Kunst entsteht im Dialog mit dir. Individuell, fein, und mit
            Fokus auf Ästhetik und Bedeutung.
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
