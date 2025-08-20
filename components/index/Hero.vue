<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover opacity-60"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Dein Browser unterstützt kein Video.
    </video>

    <!-- Fade Overlay unten -->
    <div
      class="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] z-10"
    ></div>

    <!-- Inhalt -->
    <div class="relative z-1 text-center max-w-xl px-6 sm:px-8 md:px-12">
      <!-- Logo -->
      <img
        class="animate-fade-in mx-auto"
        src="/logo/mkc-tattooart.svg"
        alt="MKC Tattoo Art Logo"
      />

      <div class="mt-6">
        <a
          href="#BookingForm"
          class="cinzel-500 btn btn-custom inline-block px-4 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
        >
          Book
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import "assets/css/main.scss";
</script>
