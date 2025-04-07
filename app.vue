<template>
  <div>
    <div id="klaro"></div>
    <NuxtRouteAnnouncer />
    <Header></Header>
    <NuxtPage />
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

import { useCookieConsentStore } from "@/stores/cookieConsent"; // Store korrekt importieren
import { onBeforeMount } from "vue";

const store = useCookieConsentStore(); // Store instanziieren

onBeforeMount(async () => {
  await store.initializeKlaro(); // Asynchrone Klaro-Initialisierung
});
</script>
