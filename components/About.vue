<template>
  <section
    ref="aboutSection"
    class="relative w-full h-screen flex items-center justify-center"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row items-center px-8 md:px-16 lg:px-24 xl:px-32 relative"
    >
      <!-- Bilder Stack -->
      <div class="relative w-full md:w-1/2 h-[500px]">
        <img
          ref="image1"
          src="/images/freshTattoos/deerfish.jpg"
          alt="Tattoo 1"
          class="absolute top-0 right-0 w-52 md:w-72 rounded-lg shadow-lg opacity-0 transform rotate-[10deg] translate-x-20 -translate-y-10 shadow-lg"
        />
        <img
          ref="image2"
          src="/images/freshTattoos/fvahik.jpg"
          alt="Tattoo 2"
          class="absolute top-1/2 left-0 w-52 lg:w-72 xl:w-96 rounded-lg shadow-lg opacity-0 transform rotate-[-10deg] -translate-x-10 -translate-y-10 shadow-lg"
        />
        <img
          ref="image3"
          src="/images/freshTattoos/lakosheretics.jpg"
          alt="Tattoo 3"
          class="absolute bottom-0 right-0 w-52 md:w-72 rounded-lg shadow-lg opacity-0 transform rotate-[5deg] translate-x-16 shadow-lg"
        />
      </div>

      <!-- Text -->
      <div
        ref="text"
        class="w-full md:px-12 lg:px-20 md:w-1/2 text-white text-center md:text-left space-y-4 opacity-0 transform scale-90 translate-x-[50px] shadow-orange-500/50"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-orange-500">
          Mythology & Folklore
        </h2>
        <p class="text-lg md:text-xl text-gray-300 poppins-200">
"            Welcome to MKC Tattoo Art! I create unique works of art from legends and sagas with passion and precision.
"        </p>
        <a
          href="#BookingForm"
          class="btn btn-custom inline-block px-4 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
          >Book now</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

const aboutSection = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const text = ref(null);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
    .fromTo(
      image1.value,
      { opacity: 0, x: 100, y: -50, rotate: 15 },
      { opacity: 1, x: 0, y: 0, rotate: 5, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(
      image2.value,
      { opacity: 0, x: -100, y: -30, rotate: -15 },
      {
        opacity: 1,
        x: 0,
        y: -160,
        rotate: -5,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .fromTo(
      image3.value,
      { opacity: 0, x: -50, y: 50, rotate: 10 },
      {
        opacity: 1,
        x: 0,
        y: 80,
        rotate: -5,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .fromTo(
      text.value,
      { opacity: 0, scale: 0.9, x: 50 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.3"
    );
});
</script>

<style scoped>
/* Falls du zusätzliche Styling-Anpassungen brauchst */
</style>
