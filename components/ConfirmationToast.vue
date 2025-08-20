<template>
  <transition name="fade-slide" appear @after-leave="$emit('close')">
    <div
      v-if="visible"
      class="w-56 md:w-96 text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-900 to-green-800 text-green-200 border border-gradient-green px-6 py-4 rounded-xl shadow-glow-green text-lg z-50"
    >
      <p class="!text-lg text-center">
        Danke für deine Anfrage! Ich melde mich bald. 🙏
      </p>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 5000);
});
</script>

<style scoped>
/* Border mit Farbverlauf */
.border-gradient-green {
  border-image-slice: 1;
  border-width: 1.5px;
  border-style: solid;
  border-image-source: linear-gradient(
    45deg,
    #4ade80,
    #22c55e
  ); /* von hellgrün zu mittlerem grün */
}

/* Schöner grüner Glow Schatten */
.shadow-glow-green {
  box-shadow: 0 0 8px 2px rgba(34, 197, 94, 0.6),
    0 2px 10px rgba(5, 150, 105, 0.4);
}

/* Fade-slide animation bleibt wie gehabt */
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
