<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header></Header>
    <NuxtPage />
    <CookieBanner></CookieBanner>
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script setup>
import "assets/css/fonts.scss";
import "assets/css/main.scss";
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import CookieBanner from "./components/CookieBanner.vue";
import { useCookieStore } from "./stores/cookieStore"; // Pinia Store importieren

// Store verwenden und initialisieren
const cookieStore = useCookieStore();
cookieStore.initializeConsentStatus();
</script>
