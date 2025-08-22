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
          class="h-16 transition-all duration-300 hover:drop-shadow-[0_0_15px_#d4af37] hover:scale-105"
        />
        <img
          v-else
          src="/logo/mkc-tattooart.svg"
          alt="MKC Tattoo Art Logo"
          class="h-16 transition-all duration-300 hover:drop-shadow-[0_0_15px_#d4af37] hover:scale-105"
        />
      </NuxtLink>

      <!-- All Navigation and Action Buttons Container -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- Left Side: Gallery and About -->
        <div class="flex items-center space-x-6">
          <NuxtLink
            to="/gallery"
            class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-[#d4af37] cinzel-300 hyphens-auto"
          >
            {{ t.navigation.gallery }}
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="btn-custom-2 py-2 text-white text-sm sm:text-lg font-medium hover:text-[#d4af37] cinzel-300 hyphens-auto"
          >
            {{ t.navigation.about }}
          </NuxtLink>
        </div>

        <!-- Right Side: Language Switcher and Book Button -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="toggleLanguageMenu"
              class="flex items-center space-x-2 text-white hover:text-[#d4af37] transition-colors duration-200"
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
                  class="w-full px-4 py-2 text-left text-white hover:bg-[#d4af37] hover:text-black transition-colors duration-200 flex items-center space-x-3"
                  :class="{
                    'bg-[#d4af37] text-black': lang.key === currentLanguage,
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
            class="cinzel-500 cta-button cta-button-primary inline-block px-5 py-2 text-sm sm:text-base font-bold text-white rounded-lg shadow-[0_6px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.6)]"
          >
            {{ t.navigation.bookNow }}
          </NuxtLink>
        </div>
      </div>

      <!-- Modern Hamburger Menu Button -->
      <button
        @click="toggleMenu"
        class="hamburger-menu block md:hidden relative z-[9999] focus:outline-none"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Background Overlay -->
  <transition name="fade-overlay">
    <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu"></div>
  </transition>

  <!-- Modern Mobile Menu Popup -->
  <transition name="slide-up">
    <div v-if="isMenuOpen" class="mobile-menu-popup">
      <!-- Close Button -->
      <button
        @click="closeMenu"
        class="mobile-close-btn"
        aria-label="Close menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Menu Content -->
      <div class="mobile-menu-content">
        <!-- Logo Button Section - Top Left Corner -->
        <div class="mobile-logo-section-top-left">
          <NuxtLink to="/" class="mobile-logo-button" @click="closeMenu">
            <img
              v-if="isGalleryPage"
              src="/logo/mkc-gallery-logo.svg"
              alt="MKC Gallery Logo"
              class="mobile-logo-image"
            />
            <img
              v-else
              src="/logo/mkc-tattooart.svg"
              alt="MKC Tattoo Art Logo"
              class="mobile-logo-image"
            />
          </NuxtLink>
        </div>

        <!-- Language Switcher Section -->
        <div class="mobile-language-section">
          <h3 class="mobile-section-title">
            {{ t.common.language || "Sprache / Language" }}
          </h3>
          <div class="mobile-language-buttons">
            <button
              v-for="lang in availableLanguages"
              :key="lang.key"
              @click="changeLanguage(lang.key as 'de' | 'en')"
              class="mobile-lang-btn"
              :class="{
                'mobile-lang-btn-active': lang.key === currentLanguage,
              }"
            >
              <span class="mobile-lang-flag">{{ lang.flag }}</span>
              <span class="mobile-lang-name">{{ lang.name }}</span>
            </button>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="mobile-nav-links">
          <NuxtLink to="/gallery" class="mobile-nav-link" @click="closeMenu">
            <span class="mobile-nav-icon">🖼️</span>
            <span class="mobile-nav-text">{{ t.navigation.gallery }}</span>
            <svg
              class="mobile-nav-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </NuxtLink>

          <NuxtLink to="/about" class="mobile-nav-link" @click="closeMenu">
            <span class="mobile-nav-icon">👤</span>
            <span class="mobile-nav-text">{{ t.navigation.about }}</span>
            <svg
              class="mobile-nav-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </NuxtLink>
        </nav>

        <!-- CTA Section -->
        <div class="mobile-cta-section">
          <NuxtLink
            to="/#BookingForm"
            class="mobile-cta-button"
            @click="closeMenu"
          >
            <span class="mobile-cta-icon">📅</span>
            <span class="mobile-cta-text">{{ t.navigation.bookNow }}</span>
            <svg
              class="mobile-cta-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
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
    // Body scroll verhindern
    if (process.client) {
      document.body.style.overflow = "hidden";
    }
  } else {
    // Body scroll wiederherstellen
    if (process.client) {
      document.body.style.overflow = "";
    }
  }
};

// Funktion zum Schließen des Menüs
const closeMenu = () => {
  isMenuOpen.value = false;
  // Body scroll wiederherstellen
  if (process.client) {
    document.body.style.overflow = "";
  }
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
/* Modern Hamburger Menu Button */
.hamburger-menu {
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hamburger-line {
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #ffffff 0%, #d4af37 100%);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hamburger-line:nth-child(1) {
  top: 6px;
}

.hamburger-line:nth-child(2) {
  top: 13px;
}

.hamburger-line:nth-child(3) {
  top: 20px;
}

/* Hamburger Animation */
.hamburger-menu.is-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: #d4af37;
}

.hamburger-menu.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-menu.is-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: #d4af37;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9),
    rgba(20, 20, 20, 0.95)
  );
  backdrop-filter: blur(10px);
  z-index: 998;
}

/* Mobile Menu Popup */
.mobile-menu-popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.98),
    rgba(20, 20, 20, 0.95)
  );
  backdrop-filter: blur(15px);
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow-y: auto;
  padding: 2rem;
}

/* Close Button */
.mobile-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(244, 208, 63, 0.05)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.mobile-close-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.2),
    rgba(244, 208, 63, 0.1)
  );
  border-color: rgba(212, 175, 55, 0.5);
  transform: scale(1.05);
}

/* Logo Section - Top Left Corner */
.mobile-logo-section-top-left {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
}

.mobile-logo-button {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05),
    rgba(244, 208, 63, 0.02)
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.mobile-logo-button:hover {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(244, 208, 63, 0.05)
  );
  border-color: rgba(212, 175, 55, 0.4);
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
}

.mobile-logo-image {
  height: 2.5rem;
  width: auto;
  transition: all 0.3s ease;
}

.mobile-logo-button:hover .mobile-logo-image {
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.6));
}

/* Menu Content */
.mobile-menu-content {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Language Section */
.mobile-language-section {
  margin-top: 2rem;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05),
    rgba(244, 208, 63, 0.02)
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(5px);
}

.mobile-section-title {
  font-family: "Cinzel";
  font-weight: 600;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  text-align: center;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.mobile-language-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.mobile-lang-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.mobile-lang-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(244, 208, 63, 0.05)
  );
  border-color: rgba(212, 175, 55, 0.3);
  color: white;
  transform: translateY(-2px);
}

.mobile-lang-btn-active {
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-color: #d4af37;
  color: #1a1a1a;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
}

.mobile-lang-flag {
  font-size: 1.2rem;
}

.mobile-lang-name {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 0.9rem;
}

/* Navigation Links */
.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.mobile-nav-link:hover {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08),
    rgba(244, 208, 63, 0.03)
  );
  border-color: rgba(212, 175, 55, 0.2);
  color: white;
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.mobile-nav-icon {
  font-size: 1.5rem;
  width: 24px;
  text-align: center;
}

.mobile-nav-text {
  font-family: "Cinzel";
  font-weight: 500;
  font-size: 1.1rem;
  flex: 1;
}

.mobile-nav-arrow {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .mobile-nav-arrow {
  color: #d4af37;
  transform: translateX(4px);
}

/* CTA Section */
.mobile-cta-section {
  margin-top: auto;
  padding-top: 1rem;
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
  background-size: 200% 200%;
  border: none;
  border-radius: 16px;
  color: #1a1a1a;
  text-decoration: none;
  font-family: "Cinzel";
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
  animation: gradient-shift 3s ease-in-out infinite;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.mobile-cta-button:hover {
  background-position: 100% 100%;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.5);
}

.mobile-cta-icon {
  font-size: 1.5rem;
  width: 24px;
  text-align: center;
}

.mobile-cta-text {
  flex: 1;
}

.mobile-cta-arrow {
  width: 20px;
  height: 20px;
  color: #1a1a1a;
  transition: all 0.3s ease;
}

.mobile-cta-button:hover .mobile-cta-arrow {
  transform: translateX(4px);
}

/* Animations */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Transitions */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Responsive Adjustments */
@media (max-width: 480px) {
  .mobile-menu-popup {
    max-width: 100%;
    padding: 1.5rem;
  }

  .mobile-menu-content {
    margin-top: 3rem;
    gap: 1.5rem;
  }

  .mobile-logo-section-top-left {
    top: 1rem;
    left: 1rem;
  }

  .mobile-logo-button {
    padding: 0.5rem;
  }

  .mobile-logo-image {
    height: 2rem;
  }

  .mobile-language-section {
    padding: 1.25rem;
  }

  .mobile-language-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }

  .mobile-nav-link {
    padding: 0.875rem 1rem;
  }

  .mobile-cta-button {
    padding: 1rem 1.25rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .hamburger-menu,
  .mobile-nav-link,
  .mobile-cta-button,
  .mobile-lang-btn {
    transition: none;
  }

  .mobile-cta-button {
    animation: none;
  }
}

/* Focus States */
.hamburger-menu:focus,
.mobile-close-btn:focus,
.mobile-lang-btn:focus,
.mobile-nav-link:focus,
.mobile-cta-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.4);
}

/* Scrollbar Styling for Mobile Menu */
.mobile-menu-popup::-webkit-scrollbar {
  width: 6px;
}

.mobile-menu-popup::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.mobile-menu-popup::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.3);
  border-radius: 3px;
}

.mobile-menu-popup::-webkit-scrollbar-thumb:hover {
  background: rgba(212, 175, 55, 0.5);
}
</style>
