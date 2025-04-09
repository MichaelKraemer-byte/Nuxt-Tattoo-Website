<template>
  <div class="min-h-screen py-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
    <div id="instagram-container" v-if="cookieStore.consentGiven">
      <!-- Instagram Feed iframe wird nur angezeigt, wenn Zustimmung erteilt wurde -->
      <iframe
        v-if="cookieStore.instagramIframeSrc"
        :src="cookieStore.instagramIframeSrc"
        allowtransparency="true"
        class="w-full min-h-screen border-0 overflow-hidden shadow-lg rounded-lg"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { useCookieStore } from "../stores/cookieStore"; // Pinia Store importieren

// Store verwenden
const cookieStore = useCookieStore();
</script>
