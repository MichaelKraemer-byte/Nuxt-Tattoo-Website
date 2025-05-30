<template>
  <section ref="galleryContainer" class="horizontal-gallery-wrapper py-20">
    <div ref="gallery" class="horizontal-gallery">
      <div v-for="i in 11" :key="i" class="image-wrapper gallery-image">
        <NuxtImg
          :src="`/img/freshTattoos/${i}.jpg`"
          loading="lazy"
          class="tattoo-img"
          :alt="`Tattoo ${i}`"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryContainer = ref(null);
const gallery = ref(null);

onMounted(async () => {
  const isClient = typeof window !== "undefined";
  const isTouch =
    isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouch) {
    // Dynamischer Import im Client
    const [{ tns }] = await Promise.all([
      import("tiny-slider/src/tiny-slider"),
      import("tiny-slider/dist/tiny-slider.css"),
    ]);

    tns({
      container: gallery.value,
      items: 1.2,
      slideBy: 1,
      gutter: 20,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      nav: false,
      controls: false,
      responsive: {
        640: { items: 1.5 },
        768: { items: 2 },
        1024: { items: 3 },
      },
    });
  } else {
    const totalWidth = gallery.value.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(gallery.value, {
      x: () => -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: galleryContainer.value,
        start: "center center",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.utils.toArray(".gallery-image").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, scale: 0.8, rotate: i % 2 === 0 ? -4 : 4 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          delay: i * 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "left 85%",
          },
        }
      );
    });
  }
});
</script>

<style scoped>
.horizontal-gallery-wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #111;
}

.horizontal-gallery {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  height: 100%;
  will-change: transform;
  width: max-content; /* Wichtig: Breite an Inhalt anpassen */
}

.image-wrapper {
  flex: 0 0 auto;
  width: 400px;
  height: 650px;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.tattoo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-wrapper:hover .tattoo-img {
  transform: scale(1.05);
}

.horizontal-gallery {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 1024px) {
  .horizontal-gallery {
    overflow-x: auto;
  }
}
</style>
