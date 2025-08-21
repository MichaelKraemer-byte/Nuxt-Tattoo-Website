<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <Cursor />
    <NuxtPage />
    <FloatingContact />
    <CookieBanner />
    <Footer />
  </div>
</template>

<script setup>
import "assets/css/fonts.scss";
import "assets/css/main.scss";
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import CookieBanner from "./components/CookieBanner.vue";
import FloatingContact from "@/components/FloatingContact.vue";
import { useCookieStore } from "./stores/cookieStore";
import Cursor from "./components/Cursor.vue";

// Store verwenden und initialisieren
const cookieStore = useCookieStore();

// Lazy initialization für bessere Performance
onMounted(() => {
  cookieStore.initializeConsentStatus();
});
</script>

<style>
#vue-tracer-overlay {
  max-width: 100vw;
  overflow-x: hidden;
  display: none !important;
}

#vue-tracer-overlay svg {
  max-width: 100%;
  height: 100%;
  display: none;
}

#vue-tracer-overlay rect {
  width: 100%;
  height: 100%;
  display: none;
}

/* Performance-Optimierungen für CSS */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
