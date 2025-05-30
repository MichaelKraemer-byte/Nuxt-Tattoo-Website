<template>
  <header
    class="fixed top-0 left-0 right-0 z-20 bg-black/15 backdrop-blur-md py-6 shadow-md"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/">
        <img
          v-if="isGalleryPage"
          src="/logo/mkc-gallery-logo.svg"
          alt="MKC Gallery Logo"
          class="h-16 transition-all duration-300 hover:drop-shadow-[0_0_15px_#f65c1a] hover:scale-105"
        />
        <img
          v-else
          src="/logo/mkc-tattooart.svg"
          alt="MKC Tattoo Art Logo"
          class="h-16 transition-all duration-300 hover:drop-shadow-[0_0_15px_#f65c1a] hover:scale-105"
        />
      </NuxtLink>

      <!-- Navigation (visible only on large screens) -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink
          to="/gallery"
          class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-orange-600 cinzel-300"
        >
          Gallery
        </NuxtLink>
        <!-- <NuxtLink
          to="/shop"
          class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-orange-600"
        >
          Shop
        </NuxtLink> -->
        <NuxtLink
          to="/about"
          class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-orange-600 cinzel-300"
        >
          About
        </NuxtLink>
      </nav>

      <!-- "Book" Button -->
      <NuxtLink
        to="/#BookingForm"
        class="cinzel-500 btn btn-custom inline-block px-4 py-1.5 text-sm sm:text-lg sm:px-6 sm:py-2 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
      >
        Book now
      </NuxtLink>

      <!-- Hamburger Menu Button (Visible only on small screens) -->
      <button
        @click="toggleMenu"
        class="p-3 block md:hidden text-white text-2xl focus:outline-none hover:cursor-pointer"
      >
        <span class="block w-6 h-1 bg-white mb-1"></span>
        <span class="block w-6 h-1 bg-white mb-1"></span>
        <span class="block w-6 h-1 bg-white"></span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Background (Smooth Fade In/Out) -->
  <transition name="fade">
    <div
      v-show="isMenuOpen"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 opacity-0"
      :class="{ 'opacity-80': isMenuOpen }"
      @click="closeMenu"
    ></div>
  </transition>

  <!-- Mobile Menu Popup (Slide in effect) -->
  <transition name="slide-fade">
    <div
      v-if="isMenuOpen"
      class="fixed pr-15 p-10 top-10 right-0 bg-[#121212] rounded-sm h-auto transform z-100 shadow-md border border-[#FFFFFF80] border-solid"
    >
      <nav class="flex flex-col items-start space-y-4">
        <NuxtLink
          to="/gallery"
          class="btn-custom-2 py-2 text-white text-xl font-medium hover:text-orange-600 cinzel-300"
          @click="closeMenu"
        >
          Gallery
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="btn-custom-2 py-2 text-white text-xl font-medium hover:text-orange-600 cinzel-300"
          @click="closeMenu"
        >
          About
        </NuxtLink>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Berechnete Eigenschaft, die überprüft, ob der aktuelle Pfad '/gallery' ist
const isGalleryPage = computed(() => route.path === "/gallery");

// Reaktive Variable für das Menü
const isMenuOpen = ref(false);

// Funktion zum Öffnen und Schließen des Menüs
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Funktion zum Schließen des Menüs
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Slide and Fade Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
</style>
