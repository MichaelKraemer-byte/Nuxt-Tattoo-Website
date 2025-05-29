<template>
  <div>
    <div
      ref="cursor"
      class="cursor"
      :class="{ 'cursor--active': isActive }"
    ></div>
    <div ref="cursorFilter" class="cursor-filter"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const cursor = ref(null);

const position = reactive({ x: 0, y: 0 });
const lastPosition = reactive({ x: 0, y: 0 });
const isActive = ref(false);
const speed = ref(0);

let currentX = 0;
let currentY = 0;
const ease = 0.15;

const cursorFilter = ref(null);

function animate() {
  currentX += (position.x - currentX) * ease;
  currentY += (position.y - currentY) * ease;

  if (cursor.value) {
    const size = Math.min(50, Math.max(20, 20 + speed.value * 100));

    cursor.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    cursor.value.style.width = `${size}px`;
    cursor.value.style.height = `${size}px`;

    if (cursorFilter.value) {
      cursorFilter.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      cursorFilter.value.style.width = `${size}px`;
      cursorFilter.value.style.height = `${size}px`;
    }
  }

  requestAnimationFrame(animate);
}

function onMouseMove(e) {
  position.x = e.clientX - 10;
  position.y = e.clientY - 10;

  const dx = e.clientX - lastPosition.x;
  const dy = e.clientY - lastPosition.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  speed.value = dist / 50;

  lastPosition.x = e.clientX;
  lastPosition.y = e.clientY;

  // Neuen Code: Element unter Cursor ermitteln
  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

  if (elementUnderCursor) {
    const style = getComputedStyle(elementUnderCursor);
    const color = style.color;

    // Farbe in RGB zerlegen
    const rgb = color.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
      const r = parseInt(rgb[0], 10);
      const g = parseInt(rgb[1], 10);
      const b = parseInt(rgb[2], 10);

      // Helligkeit berechnen (Luminanz)
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      if (luminance < 100) {
        // Dunkle Farbe -> Schrift weiß machen
        elementUnderCursor.style.color = "white";
      } else {
        // Helle Farbe -> Ursprungsfarbe wiederherstellen (oder keine Änderung)
        elementUnderCursor.style.color = "";
      }
    }
  }
}

function onMouseEnterButton() {
  isActive.value = true;
}

function onMouseLeaveButton() {
  isActive.value = false;
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);

  const buttons = document.querySelectorAll("button, a");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", onMouseEnterButton);
    btn.addEventListener("mouseleave", onMouseLeaveButton);
  });

  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);

  const buttons = document.querySelectorAll("button, a");
  buttons.forEach((btn) => {
    btn.removeEventListener("mouseenter", onMouseEnterButton);
    btn.removeEventListener("mouseleave", onMouseLeaveButton);
  });
});
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent; /* kein fill! */
  border-radius: 50%;
  pointer-events: none;
  animation: pulseGlow 2.5s ease-in-out infinite;
  transition: box-shadow 0.3s ease;
  z-index: 9999;
  will-change: transform, width, height, box-shadow;
  box-shadow: 0 0 8px 8px rgba(246, 92, 26, 0.8); /* angepasste Farbe */
  width: 20px;
  height: 20px;
}

.cursor--active {
  animation: pulseGlowActive 1.5s ease-in-out infinite;
  box-shadow: 0 0 20px 20px rgba(246, 92, 26, 1);
}

.cursor-filter {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  filter: invert(1) brightness(1.2);
  width: 20px;
  height: 20px;
  background: transparent; /* ganz wichtig */
  mix-blend-mode: normal;
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 8px 3px rgba(246, 92, 26, 0.7);
  }
  50% {
    box-shadow: 0 0 15px 7px rgba(246, 92, 26, 1);
  }
}

@keyframes pulseGlowActive {
  0%,
  100% {
    box-shadow: 0 0 20px 6px rgba(246, 92, 26, 1);
  }
  50% {
    box-shadow: 0 0 30px 10px rgba(246, 92, 26, 1);
  }
}
</style>
