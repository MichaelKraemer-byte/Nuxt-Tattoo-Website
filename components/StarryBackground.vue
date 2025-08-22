<template>
  <div class="starry-background" ref="starryContainer">
    <!-- Nebel-Ebene -->
    <div class="nebula-layer"></div>

    <!-- Aurora-Nebel-Ebene -->
    <div class="nebula-aurora"></div>

    <!-- Sterne-Ebene -->
    <div
      v-for="(star, index) in stars"
      :key="index"
      :class="[
        'star',
        `star-${star.size}`,
        `star-${star.type}`,
        star.specialClass,
      ]"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        animationDelay: star.delay + 's',
        animationDuration: star.duration + 's',
        transform: `translateY(${star.parallaxOffset}px)`,
      }"
    ></div>

    <!-- Schießende Sterne -->
    <div
      v-for="(shootingStar, index) in shootingStars"
      :key="`shooting-${index}`"
      class="shooting-star"
      :style="{
        left: shootingStar.x + '%',
        top: shootingStar.y + '%',
        animationDelay: shootingStar.delay + 's',
      }"
    ></div>

    <!-- Meteore -->
    <div
      v-for="(meteor, index) in meteors"
      :key="`meteor-${index}`"
      class="meteor"
      :style="{
        left: meteor.x + '%',
        top: meteor.y + '%',
        animationDelay: meteor.delay + 's',
      }"
    ></div>

    <!-- Sternschnuppen-Spuren -->
    <div
      v-for="(trail, index) in starTrails"
      :key="`trail-${index}`"
      class="star-trail"
      :style="{
        left: trail.x + '%',
        top: trail.y + '%',
        opacity: trail.opacity,
        transform: `rotate(${trail.rotation}deg)`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const starryContainer = ref(null);
const stars = ref([]);
const shootingStars = ref([]);
const starTrails = ref([]);
const meteors = ref([]);

// Stern-Typen für verschiedene Größen und Effekte
const starTypes = [
  "twinkle",
  "pulse",
  "glow",
  "sparkle",
  "flicker",
  "cosmic",
  "drifting",
  "aurora",
];
const starSizes = ["tiny", "small", "medium", "large"];
const specialClasses = [
  "",
  "star-cluster",
  "star-cosmic",
  "star-drifting",
  "star-aurora",
];

// Sterne generieren
const generateStars = () => {
  const newStars = [];
  const numStars = 250; // Erhöhte Anzahl für bessere Dichte

  for (let i = 0; i < numStars; i++) {
    newStars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: starSizes[Math.floor(Math.random() * starSizes.length)],
      type: starTypes[Math.floor(Math.random() * starTypes.length)],
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 5,
      parallax: 0.05 + Math.random() * 0.4,
      parallaxOffset: 0,
      brightness: 0.6 + Math.random() * 0.4,
      specialClass:
        specialClasses[Math.floor(Math.random() * specialClasses.length)],
    });
  }
  stars.value = newStars;
};

// Schießende Sterne generieren
const generateShootingStars = () => {
  const newShootingStars = [];
  const numShootingStars = 4;

  for (let i = 0; i < numShootingStars; i++) {
    newShootingStars.push({
      x: 80 + Math.random() * 20,
      y: 10 + Math.random() * 30,
      delay: Math.random() * 12,
      active: false,
    });
  }
  shootingStars.value = newShootingStars;
};

// Meteore generieren
const generateMeteors = () => {
  const newMeteors = [];
  const numMeteors = 6;

  for (let i = 0; i < numMeteors; i++) {
    newMeteors.push({
      x: 70 + Math.random() * 30,
      y: 5 + Math.random() * 40,
      delay: Math.random() * 15,
      active: false,
    });
  }
  meteors.value = newMeteors;
};

// Sternschnuppen-Spuren generieren
const generateStarTrails = () => {
  const newTrails = [];
  const numTrails = 12;

  for (let i = 0; i < numTrails; i++) {
    newTrails.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      active: false,
    });
  }
  starTrails.value = newTrails;
};

// Scroll-Parallax-Effekt mit Throttling
let scrollTimeout;
const handleScroll = () => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    if (!starryContainer.value) return;

    const scrolled = window.pageYOffset;

    stars.value.forEach((star, index) => {
      star.parallaxOffset = -(scrolled * star.parallax * 0.1);
    });

    scrollTimeout = null;
  }, 16); // ~60fps
};

// Mausbewegung für interaktive Sterne mit Throttling
let mouseTimeout;
const handleMouseMove = (e) => {
  if (mouseTimeout) return;

  mouseTimeout = setTimeout(() => {
    if (!starryContainer.value) return;

    const rect = starryContainer.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Sterne in der Nähe der Maus zum Leuchten bringen
    stars.value.forEach((star, index) => {
      const starX = (star.x / 100) * rect.width;
      const starY = (star.y / 100) * rect.height;
      const distance = Math.sqrt((mouseX - starX) ** 2 + (mouseY - starY) ** 2);

      if (distance < 150) {
        const intensity = Math.max(0, 1 - distance / 150);
        const element = starryContainer.value.querySelector(
          `.star:nth-child(${index + 3})`
        ); // +3 wegen nebula-layers
        if (element) {
          element.style.filter = `brightness(${
            1 + intensity * 1.2
          }) drop-shadow(0 0 ${intensity * 15}px rgba(255, 255, 255, ${
            intensity * 0.9
          }))`;
        }
      }
    });

    mouseTimeout = null;
  }, 16); // ~60fps
};

// Schießende Sterne animieren
const animateShootingStars = () => {
  shootingStars.value.forEach((star, index) => {
    if (!star.active && Math.random() < 0.015) {
      // 1.5% Chance pro Frame
      star.active = true;
      setTimeout(() => {
        star.active = false;
      }, 4000);
    }
  });
};

// Meteore animieren
const animateMeteors = () => {
  meteors.value.forEach((meteor, index) => {
    if (!meteor.active && Math.random() < 0.01) {
      // 1% Chance pro Frame
      meteor.active = true;
      setTimeout(() => {
        meteor.active = false;
      }, 5000);
    }
  });
};

// Sternschnuppen-Spuren animieren
const animateStarTrails = () => {
  starTrails.value.forEach((trail, index) => {
    if (!trail.active && Math.random() < 0.008) {
      // 0.8% Chance pro Frame
      trail.active = true;
      trail.opacity = 0.1 + Math.random() * 0.5;
      setTimeout(() => {
        trail.active = false;
      }, 3000);
    }
  });
};

// Animation-Loop
let animationId;
const animate = () => {
  animateShootingStars();
  animateMeteors();
  animateStarTrails();
  animationId = requestAnimationFrame(animate);
};

onMounted(async () => {
  await nextTick();
  generateStars();
  generateShootingStars();
  generateMeteors();
  generateStarTrails();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("mousemove", handleMouseMove, { passive: true });

  // Animation-Loop starten
  animate();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("mousemove", handleMouseMove);
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
.starry-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

/* Nebel-Ebene */
.nebula-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(120, 119, 198, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 119, 198, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(120, 219, 255, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  transition: filter 0.3s ease-out;
}

/* Stern-Größen */
.star-tiny {
  width: 1px;
  height: 1px;
  opacity: 0.6;
}

.star-small {
  width: 2px;
  height: 2px;
  opacity: 0.8;
}

.star-medium {
  width: 3px;
  height: 3px;
  opacity: 0.9;
}

.star-large {
  width: 4px;
  height: 4px;
  opacity: 1;
}

/* Stern-Typen und Animationen */
.star-twinkle {
  animation: twinkle infinite ease-in-out;
}

.star-pulse {
  animation: pulse infinite ease-in-out;
}

.star-glow {
  animation: glow infinite ease-in-out;
}

.star-sparkle {
  animation: sparkle infinite ease-in-out;
}

.star-flicker {
  animation: flicker infinite ease-in-out;
}

/* Schießende Sterne */
.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, white, transparent);
  border-radius: 50%;
  animation: shootingStar 4s linear infinite;
  opacity: 0;
}

.shooting-star:nth-child(1) {
  animation-delay: 0s;
}
.shooting-star:nth-child(2) {
  animation-delay: 1s;
}
.shooting-star:nth-child(3) {
  animation-delay: 2s;
}
.shooting-star:nth-child(4) {
  animation-delay: 3s;
}

/* Meteore */
.meteor {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #ffffff, #87ceeb, transparent);
  border-radius: 50%;
  animation: meteorFall 5s linear infinite;
  opacity: 0;
}

.meteor:nth-child(1) {
  animation-delay: 0s;
}
.meteor:nth-child(2) {
  animation-delay: 1.5s;
}
.meteor:nth-child(3) {
  animation-delay: 3s;
}
.meteor:nth-child(4) {
  animation-delay: 4.5s;
}
.meteor:nth-child(5) {
  animation-delay: 6s;
}
.meteor:nth-child(6) {
  animation-delay: 7.5s;
}

/* Sternschnuppen-Spuren */
.star-trail {
  position: absolute;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

/* Keyframe-Animationen */
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.6;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
  }
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(1) rotate(0deg);
  }
  25% {
    opacity: 1;
    transform: scale(1.3) rotate(90deg);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.8) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: scale(1.1) rotate(270deg);
  }
}

@keyframes flicker {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
  25% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  75% {
    opacity: 0.5;
    transform: scale(0.9);
  }
}

@keyframes shootingStar {
  0% {
    transform: translateX(0) translateY(0) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-350px) translateY(350px) rotate(45deg);
    opacity: 0;
  }
}

@keyframes meteorFall {
  0% {
    transform: translateX(0) translateY(0) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-450px) translateY(450px) rotate(45deg);
    opacity: 0;
  }
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
  .starry-background {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }

  .star-tiny {
    width: 1px;
    height: 1px;
  }

  .star-small {
    width: 1px;
    height: 1px;
  }

  .star-medium {
    width: 2px;
    height: 2px;
  }

  .star-large {
    width: 3px;
    height: 3px;
  }

  .star-trail {
    width: 60px;
  }

  .meteor {
    width: 2px;
    height: 2px;
  }
}

@media (max-width: 480px) {
  .star-tiny {
    width: 0.5px;
    height: 0.5px;
  }

  .star-small {
    width: 1px;
    height: 1px;
  }

  .star-medium {
    width: 1.5px;
    height: 1.5px;
  }

  .star-large {
    width: 2px;
    height: 2px;
  }

  .star-trail {
    width: 40px;
  }

  .meteor {
    width: 2px;
    height: 2px;
  }
}

/* Performance-Optimierungen */
.star {
  will-change: transform, opacity, filter;
  backface-visibility: hidden;
}

.starry-background {
  will-change: transform;
}

.nebula-layer {
  will-change: opacity;
}

/* Reduzierte Animationen für Nutzer mit Präferenz */
@media (prefers-reduced-motion: reduce) {
  .star,
  .shooting-star,
  .star-trail,
  .meteor {
    animation: none;
    transition: none;
  }
}
</style>
