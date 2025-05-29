<template>
  <div>
    <!-- Section 1 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-6 sm:px-10 md:px-16 xl:px-32 flex flex-col items-center lg:flex-row py-36 gap-16 lg:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-up"
          class="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            v-for="n in 6"
            :key="n"
            class="relative overflow-hidden rounded-xl shadow-xl"
          >
            <NuxtImg
              :src="`/img/freshTattoos/${n}.jpg`"
              alt="Tattoo Galerie"
              class="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group hover:scale-150 hover:z-10"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full lg:w-1/2 text-center lg:text-left items-center px-4 sm:px-0"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight cinzel-500"
          >
            Fantasy, Mythologie, Folklore
          </h2>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed cinzel-300"
          >
            Ich erschaffe Kreaturen, Wesen in allen Formen, Sagas und Legenden
            und bestuecke sie mit Geschichten und erwecke sie auf deiner Haut
            zum Leben.
          </p>
        </div>
      </section>
    </ClientOnly>

    <!-- Section 2 -->
    <ClientOnly>
      <section
        class="mx-auto max-w-screen-2xl px-6 sm:px-10 md:px-16 xl:px-32 flex items-center flex-col lg:flex-row-reverse py-36 gap-16 lg:gap-24"
      >
        <!-- Galerie -->
        <div
          data-aos="fade-left"
          class="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto"
        >
          <div class="col-span-2 md:col-span-3 flex justify-center">
            <NuxtImg
              src="/img/arms-of-soulway.PNG"
              alt="Tattoo Galerie"
              class="w-[300px] max-h-[600px] object-contain transform transition-transform duration-500 ease-in-out group hover:scale-150 hover:z-10 rotate-32"
            />
          </div>
        </div>

        <!-- Text -->
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 sm:px-0"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight cinzel-500"
          >
            Achtsamkeit, Natur und Erleuchtung
          </h2>
          <p
            class="text-base sm:text-lg text-gray-300 leading-relaxed cinzel-300"
          >
            Ich verbinde symbolisch Anatomie, Natur, Spiritualität in
            ornamentalischer Anordnung im kuenstlerischem Ausdruck fuer
            Achtsamkeit und Verbundenheit. Meine spirituellen Tattoos erinnern
            dich an die Kraft der Gegenwart.
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
