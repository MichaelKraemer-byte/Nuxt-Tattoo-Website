<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header></Header>
    <NuxtPage />
    <CookieBanner></CookieBanner>
    <Footer></Footer>
  </div>
</template>

<styles scoped>

</styles>

<script setup>
import "assets/css/fonts.scss";
import "assets/css/main.scss";
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import CookieBanner from "./components/CookieBanner.vue";
import { useCookieStore } from "./stores/cookieStore"; // Pinia Store importieren

// Store verwenden und initialisieren
const cookieStore = useCookieStore();
cookieStore.initializeConsentStatus();
</script>
