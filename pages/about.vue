<template>
  <div class="text-white">
    <!-- HERO SECTION -->
    <section
      class="relative h-screen flex flex-col justify-center items-center text-center px-6"
      data-aos="fade-in"
    >
      <NuxtImg
        format="webp"
        src="/img/me/finger-pistole-copy.jpg"
        alt="Tattoo Artist bei der Arbeit"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold cinzel-500 mb-4">
          Ich bin Mika
        </h1>
        <h4 class="text-5xl cinzel-300 leading-relaxed">
          Tattoo Artist für Fantasie, Mythologie und spirituelle Körperkunst.
        </h4>
        <p class="mt-6 text-base sm:text-lg text-gray-300 cinzel-300">
          Meine Arbeiten erzählen Geschichten, verbinden Seele und Haut.
        </p>
      </div>
    </section>

    <!-- SECTION 1: Wer ich bin -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <div class="w-full lg:w-1/2" data-aos="fade-right">
        <NuxtImg
          src="/img/me/hunt-hocke.jpg"
          alt="Portrait des Künstlers"
          class="rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto"
        />
      </div>
      <div
        class="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-left"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 cinzel-500">
          Wer ich bin
        </h2>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed">
          Ich bin [Name] – mein Stil ist tief verwurzelt in Fantasie, Symbolik
          und der Sehnsucht nach Bedeutung. Ich tätowiere seit [X] Jahren und
          verbinde dabei Mythologie, Natur und Spiritualität.
        </p>
      </div>
    </section>

    <!-- SECTION 2: Inspiration -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12"
    >
      <div
        class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-2"
        data-aos="fade-up"
      >
        <NuxtImg
          src="/img/inspiration1.jpg"
          alt="Tattoo Inspiration"
          class="col-span-2 sm:col-span-3 object-contain rounded-xl"
        />
        <!-- Weitere Bilder optional -->
      </div>
      <div
        class="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 cinzel-500">
          Inspiration & Themen
        </h2>
        <p class="text-gray-300 cinzel-300 leading-relaxed text-lg">
          Ob mystische Wesen, spirituelle Ornamente oder botanische
          Kompositionen – meine Motive spiegeln tiefe Verbundenheit mit
          Fantasie, Natur und innerer Wandlung.
        </p>
      </div>
    </section>

    <!-- SECTION 3: Arbeitsweise -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <div class="w-full lg:w-1/2" data-aos="fade-right">
        <NuxtImg
          src="/img/workflow.jpg"
          alt="Arbeitsweise Tattoo"
          class="rounded-2xl shadow-xl object-contain w-full max-w-md mx-auto"
        />
      </div>
      <div
        class="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-left"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 cinzel-500">
          Mein Stil & Prozess
        </h2>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed">
          Von der ersten Skizze bis zum finalen Tattoo arbeite ich eng mit dir
          zusammen. Ich lege Wert auf Individualität, Bedeutung und ein ruhiges,
          achtsames Tätowiererlebnis.
        </p>
      </div>
    </section>

    <!-- SECTION 4: Bedeutung -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12"
    >
      <div
        class="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-2"
        data-aos="fade-up"
      >
        <NuxtImg
          src="/img/meaningful.jpg"
          alt="Spirituelle Tattoos"
          class="col-span-2 sm:col-span-3 object-contain rounded-xl"
        />
      </div>
      <div
        class="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 cinzel-500">
          Was meine Kunst bedeutet
        </h2>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed">
          Ein Tattoo ist mehr als ein Bild – es ist Erinnerung, Kraftquelle und
          Ausdruck deiner inneren Welt. Ich glaube an Kunst, die heilt, erinnert
          und verbindet.
        </p>
      </div>
    </section>

    <!-- SECTION 5: Call to Action -->
    <section
      class="bg-gray-900 text-white py-24 px-6 text-center"
      data-aos="zoom-in"
    >
      <h2 class="text-3xl sm:text-4xl font-bold mb-6 cinzel-500">
        Lass uns gemeinsam etwas schaffen
      </h2>
      <p class="text-lg text-gray-300 cinzel-300 mb-6">
        Sende mir einen Raben oder eine Nachricht – und wir erwecken dein Tattoo
        zum Leben.
      </p>
      <NuxtLink
        to="/kontakt"
        class="inline-block bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
      >
        Kontakt aufnehmen
      </NuxtLink>
    </section>
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
