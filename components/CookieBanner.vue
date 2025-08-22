<template>
  <transition
    name="fade-slide"
    appear
    enter-active-class="transition ease-out duration-700"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-500"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div v-if="cookieStore.showCookieBanner" class="cookie-banner">
      <div class="cookie-content">
        <div class="cookie-text">
          <p class="cookie-description">
            {{ t.cookieBanner.description }}
            <NuxtLink to="/shared/privacy-policy" class="privacy-link">
              {{ t.navigation.privacyPolicy }}
            </NuxtLink>
            .
          </p>

          <div class="instagram-notice">
            <p class="instagram-text">
              {{ t.cookieBanner.instagramNotice }}
            </p>
          </div>
        </div>

        <div class="cookie-buttons">
          <button @click="cookieStore.acceptCookies" class="accept-button">
            {{ t.cookieBanner.accept }}
          </button>
          <button @click="cookieStore.declineCookies" class="decline-button">
            {{ t.cookieBanner.decline }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useCookieStore } from "../stores/cookieStore";
import { useI18n } from "~/composables/useI18n";

// Store verwenden
const cookieStore = useCookieStore();
const { t } = useI18n();

// Stelle sicher, dass der Zustand nachgeladen wird, nur im Browser
if (typeof window !== "undefined") {
  cookieStore.initializeConsentStatus();
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.95),
    rgba(20, 20, 20, 0.9)
  );
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.4);
  z-index: 50;
  padding: 1.5rem;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.cookie-text {
  margin-bottom: 1.5rem;
}

.cookie-description {
  font-family: "Poppins";
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.privacy-link {
  color: #d4af37;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.privacy-link:hover {
  color: #f4d03f;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
}

.instagram-notice {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(244, 208, 63, 0.05)
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  backdrop-filter: blur(5px);
}

.instagram-text {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.cookie-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.accept-button {
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
  background-size: 200% 200%;
  color: #1a1a1a;
  font-family: "Cinzel";
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
  animation: gradient-shift 3s ease-in-out infinite;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.accept-button:hover {
  background-position: 100% 100%;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.5);
}

.accept-button:active {
  transform: translateY(0);
}

.decline-button {
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%);
  color: rgba(255, 255, 255, 0.8);
  font-family: "Cinzel";
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.decline-button:hover {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  color: white;
  border-color: rgba(212, 175, 55, 0.4);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Mobile Optimierungen */
@media (max-width: 768px) {
  .cookie-banner {
    padding: 1rem;
    border-top-width: 2px;
  }

  .cookie-content {
    text-align: left;
  }

  .cookie-description {
    font-size: 0.9rem;
    text-align: center;
  }

  .instagram-notice {
    padding: 0.75rem;
    margin: 0.75rem 0;
  }

  .instagram-text {
    font-size: 0.85rem;
    text-align: center;
  }

  .cookie-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .accept-button,
  .decline-button {
    width: 100%;
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .cookie-banner {
    padding: 0.875rem;
  }

  .cookie-description {
    font-size: 0.85rem;
  }

  .instagram-text {
    font-size: 0.8rem;
  }

  .accept-button,
  .decline-button {
    padding: 0.75rem 0.875rem;
    font-size: 0.85rem;
  }
}

/* Accessibility Verbesserungen */
@media (prefers-reduced-motion: reduce) {
  .accept-button {
    animation: none;
  }

  .accept-button:hover,
  .decline-button:hover {
    transform: none;
  }
}

/* Focus States für bessere Accessibility */
.accept-button:focus,
.decline-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.8);
}

.privacy-link:focus {
  outline: 2px solid #d4af37;
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
