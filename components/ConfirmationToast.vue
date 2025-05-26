<template>
  <transition name="fade-slide" appear @after-leave="$emit('close')">
    <div
      v-if="visible"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0f0f0f] text-[#f65c1a] border border-[#f65c1a] px-6 py-4 rounded-xl shadow-xl text-lg z-50"
    >
      <p>Danke für deine Anfrage! Ich melde mich bald. 🙏</p>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 3000); // Anzeigezeit: 3 Sekunden
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
}
.fade-slide-leave-to {
  opacity: 0;
}
</style>
