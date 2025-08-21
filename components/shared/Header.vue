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
          {{ t.navigation.gallery }}
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-orange-600 cinzel-300"
        >
          {{ t.navigation.about }}
        </NuxtLink>
      </nav>

      <!-- Language Switcher and Book Button Container -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- Language Switcher -->
        <div class="relative">
          <button
            @click="toggleLanguageMenu"
            class="flex items-center space-x-2 text-white hover:text-orange-600 transition-colors duration-200"
          >
            <span class="text-lg">{{ currentLanguageInfo.flag }}</span>
            <span class="text-sm font-medium">{{
              currentLanguageInfo.name
            }}</span>
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isLanguageMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Language Dropdown -->
          <div
            v-if="isLanguageMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-[#121212] border border-[#FFFFFF80] rounded-sm shadow-lg z-50"
          >
            <div class="py-2">
              <button
                v-for="lang in availableLanguages"
                :key="lang.key"
                @click="changeLanguage(lang.key as 'de' | 'en')"
                class="w-full px-4 py-2 text-left text-white hover:bg-orange-600 hover:text-white transition-colors duration-200 flex items-center space-x-3"
                :class="{
                  'bg-orange-600 text-white': lang.key === currentLanguage,
                }"
              >
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- "Book" Button -->
        <NuxtLink
          to="/#BookingForm"
          class="cinzel-500 btn btn-custom inline-block px-4 py-1.5 text-sm sm:text-lg sm:px-6 sm:py-2 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
        >
          {{ t.navigation.bookNow }}
        </NuxtLink>
      </div>

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
        <!-- Language Switcher for Mobile -->
        <div class="w-full">
          <div class="text-white text-sm font-medium mb-2">
            Sprache / Language
          </div>
          <div class="flex space-x-2">
            <button
              v-for="lang in availableLanguages"
              :key="lang.key"
              @click="changeLanguage(lang.key as 'de' | 'en')"
              class="flex items-center space-x-2 px-3 py-2 text-white hover:bg-orange-600 hover:text-white transition-colors duration-200 rounded-sm"
              :class="{
                'bg-orange-600 text-white': lang.key === currentLanguage,
              }"
            >
              <span class="text-lg">{{ lang.flag }}</span>
              <span class="text-sm">{{ lang.name }}</span>
            </button>
          </div>
        </div>

        <NuxtLink
          to="/gallery"
          class="btn-custom-2 py-2 text-white text-xl font-medium hover:text-orange-600 cinzel-300"
          @click="closeMenu"
        >
          {{ t.navigation.gallery }}
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="btn-custom-2 py-2 text-white text-xl font-medium hover:text-orange-600 cinzel-300"
          @click="closeMenu"
        >
          {{ t.navigation.about }}
        </NuxtLink>
      </nav>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "~/composables/useI18n";

const route = useRoute();
const {
  t,
  currentLanguage,
  currentLanguageInfo,
  availableLanguages,
  changeLanguage,
} = useI18n();

// Berechnete Eigenschaft, die überprüft, ob der aktuelle Pfad '/gallery' ist
const isGalleryPage = computed(() => route.path === "/gallery");

// Reaktive Variable für das Menü
const isMenuOpen = ref(false);
const isLanguageMenuOpen = ref(false);

// Funktion zum Öffnen und Schließen des Menüs
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    isLanguageMenuOpen.value = false;
  }
};

// Funktion zum Schließen des Menüs
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Funktion zum Umschalten des Sprachmenüs
const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

// Sprachmenü schließen wenn außerhalb geklickt wird
if (process.client) {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".relative")) {
      isLanguageMenuOpen.value = false;
    }
  });
}
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
