<template>
  <div class="starry-background">
    <!-- Blau-gelber Schimmer-Overlay -->
    <div class="shimmer-overlay"></div>

    <!-- Particles.js Container -->
    <div id="particles-js" class="particles-container"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

let particlesJS;

onMounted(async () => {
  // Particles.js dynamisch laden
  if (typeof window !== "undefined") {
    try {
      // Particles.js CDN laden
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = () => {
        initParticles();
      };
      document.head.appendChild(script);
    } catch (error) {
      console.warn("Particles.js konnte nicht geladen werden:", error);
    }
  }
});

const initParticles = () => {
  if (typeof window.pJSDom !== "undefined" && window.pJSDom.length > 0) {
    // Bereits initialisiert
    return;
  }

  // Particles.js Konfiguration aus der JSON-Datei
  const config = {
    particles: {
      number: {
        value: 232,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 2.2,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  // Particles.js initialisieren
  if (window.particlesJS) {
    window.particlesJS("particles-js", config);
  }
};

onUnmounted(() => {
  // Particles.js aufräumen
  if (
    typeof window !== "undefined" &&
    window.pJSDom &&
    window.pJSDom.length > 0
  ) {
    window.pJSDom.forEach((instance) => {
      if (instance.pJS && instance.pJS.fn && instance.pJS.fn.vendors) {
        instance.pJS.fn.vendors.destroypJS();
      }
    });
  }
});
</script>

<style scoped>
.starry-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

/* Blau-gelber Schimmer-Overlay */
.shimmer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(120, 119, 198, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 255, 119, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(120, 219, 255, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
  z-index: 1;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* Performance-Optimierungen */
.starry-background {
  will-change: transform;
  backface-visibility: hidden;
}

.shimmer-overlay {
  will-change: opacity;
}

/* Reduzierte Animationen für Nutzer mit Präferenz */
@media (prefers-reduced-motion: reduce) {
  .shimmer-overlay {
    animation: none;
  }
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
  .starry-background {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }
}
</style>
