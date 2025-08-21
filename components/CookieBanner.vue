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
    <div
      v-if="cookieStore.showCookieBanner"
      class="fixed bottom-0 left-0 right-0 bg-[#121212] text-white py-8 px-6 flex flex-col items-center justify-center z-50 cinzel-300"
    >
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-lg mb-4 cinzel-300">
          {{ t.cookieBanner.description }}
          <NuxtLink
            to="/shared/privacy-policy"
            class="text-orange-400 hover:text-orange-300 transition-colors mx-1 cinzel-300"
          >
            {{ t.navigation.privacyPolicy }}
          </NuxtLink>
          .
        </p>

        <div class="flex justify-center gap-4">
          <button
            @click="cookieStore.acceptCookies"
            class="cinzel-500 px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors cursor-pointer"
          >
            {{ t.cookieBanner.accept }}
          </button>
          <button
            @click="cookieStore.declineCookies"
            class="cinzel-500 px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors cursor-pointer"
          >
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
