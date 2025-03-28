<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-black text-white"
  >
    <!-- Hintergrundbild -->
    <NuxtImg
      src="/images/hero-image-cropped-edit.jpg"
      alt="Mika the tattoo artist"
      class="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <!-- Inhalt -->
    <div class="relative z-10 text-center max-w-xl px-6 sm:px-8 md:px-12">
      <!-- Logo -->
      <img
        class="animate-fade-in mx-auto"
        src="/logo/mkc-tattooart.svg"
        alt="MKC Tattoo Art Logo"
      />

      <div class="mt-6">
        <a
          href="/kontakt"
          class="btn btn-custom inline-block px-4 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
        >
          Book now
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import "assets/css/main.scss";
</script>
