<template>
  <div class="flex flex-col items-center">
    <Hero />
    <AosSection></AosSection>
    <BookingForm />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import BookingForm from "../components/index/form/BookingForm.vue";
import Hero from "../components/index/Hero.vue";
import AosSection from "../components/index/about/AosSection.vue";
import { useSeoIndex } from "../composables/useSeo";

useSeoIndex();
</script>
