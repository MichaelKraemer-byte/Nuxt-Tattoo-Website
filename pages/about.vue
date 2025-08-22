<template>
  <div class="text-white">
    <!-- HERO SECTION -->
    <client-only>
      <section
        class="relative h-screen flex flex-col justify-center items-center text-center px-6"
        data-aos="fade-in"
      >
        <img
          src="\img\me\finger-pistole-copy2.jpg"
          alt="Tattoo Artist bei der Arbeit"
          class="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <!-- Transparenter Bereich für besseren Übergang zum Sternenhimmel -->
        <div
          class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-transparent pointer-events-none z-10"
        ></div>

        <div class="relative z-20 max-w-3xl">
          <h1
            class="text-5xl sm:text-6xl font-bold cinzel-700 mb-4 mx-2 cinematic-heading break-words"
          >
            {{ t.about.hero.title }}
          </h1>
          <h4 class="text-3xl cinzel-300 leading-relaxed cinematic-heading break-words">
            {{ t.about.hero.subtitle }}<br />
            {{ t.about.hero.description }}
          </h4>
          <p class="mt-6 text-lg text-gray-300 poppins-200 hidden md:block">
            {{ t.about.hero.longDescription }}
          </p>
        </div>
      </section>
    </client-only>

    <!-- SECTION: Persönliche Vorstellung -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <client-only>
        <!-- Swiper-Bildbereich -->
        <div
          class="!w-fit lg:w-1/2 overflow-hidden transparent-slider p-4 rounded-2xl"
          data-aos="fade-right"
        >
          <Swiper
            :modules="[Pagination, Navigation]"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="max-w-md mx-auto rounded-2xl overflow-hidden"
          >
            <SwiperSlide v-for="(image, index) in personalImages" :key="index">
              <img
                :src="image"
                alt="Portrait des Künstlers"
                class="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </client-only>

      <client-only>
        <!-- Textbereich -->
        <div
          class="w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
        >
          <div
            class="flex flex-col items-center justify-center lg:justify-start w-full"
          >
            <img
              src="/img/auge.png"
              class="w-12 md:w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
            />
            <h2
              class="text-5xl sm:text-6xl font-bold cinzel-500 mb-4 cinematic-heading break-words"
            >
              {{ t.about.personal.title }}
            </h2>
          </div>
          <p
            class="text-lg text-gray-300 poppins-300 leading-relaxed mb-12 text-center"
          >
            {{ t.about.personal.description }}
          </p>
          <h3
            class="text-4xl font-bold mb-4 cinzel-500 text-center cinematic-heading break-words"
          >
            {{ t.about.personal.whyTitle }}
          </h3>
          <p
            class="text-lg text-gray-300 poppins-300 leading-relaxed text-center"
          >
            {{ t.about.personal.whyDescription }}
          </p>
        </div>
      </client-only>
    </section>

    <client-only>
      <!-- SECTION: Timeline "Mein Weg" -->
      <section class="transparent-section py-24 px-6" data-aos="fade-up">
        <div
          class="flex flex-col items-center justify-center text-center w-full mb-4"
        >
          <img
            src="/img/auge.png"
            class="w-12 md:w-32 h-auto mb-4 sm:mb-5 scale-x-[-1]"
          />
          <h2
            class="text-5xl sm:text-6xl font-bold cinzel-500 mb-4 mx-6 cinematic-heading break-words"
          >
            {{ t.about.timeline.title }}
          </h2>
        </div>
        <ol class="relative border-l border-gray-700 max-w-2xl mx-auto">
          <li class="mb-10 ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2018"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2018"].description }}
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2019"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2019"].description }}
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2020"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2020"].description }}
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2022-2024"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2022-2024"].description }}
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2024"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2024"].description }}
            </p>
          </li>
          <li class="ml-6">
            <span
              class="absolute w-4 h-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full -left-2 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            ></span>
            <h3 class="text-xl font-semibold cinematic-heading">
              {{ t.about.timeline.items["2024-2025"].title }}
            </h3>
            <p class="text-gray-400">
              {{ t.about.timeline.items["2024-2025"].description }}
            </p>
          </li>
        </ol>
      </section>
    </client-only>

    <client-only>
      <!-- SECTION: Stil & Inspiration -->
      <section
        class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12"
      >
        <div
          class="w-full lg:w-1/2 swiper-container overflow-hidden rounded-xl transparent-slider p-4"
          data-aos="fade-right"
        >
          <!-- Swipe-Galerie kommt hier rein -->
          <Swiper
            ref="swiperRef"
            :modules="[Pagination, Navigation]"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="mySwiper"
          >
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/4.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/15.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/16.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/1.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/9.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full aspect-[3/4]">
                <img
                  src="/img/freshTattoos/2.webp"
                  class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          class="w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
        >
          <div class="flex flex-col items-center w-full">
            <img
              src="/img/auge.png"
              class="w-12 md:w-32 h-auto mb-4 sm:mb-5 scale-x-[-1]"
            />
            <h2 class="text-4xl font-bold cinzel-500 mx-6 cinematic-heading break-words">
              {{ t.about.style.title }}
            </h2>
          </div>
          <p
            class="text-lg text-gray-300 poppins-300 leading-relaxed text-center"
          >
            {{ t.about.style.description }}
          </p>
        </div>
      </section>
    </client-only>

    <!-- SECTION: Das Auge -->
    <client-only>
      <section
        class="transparent-section py-24 px-6 text-center"
        data-aos="fade-up"
      >
        <div
          class="flex flex-col items-center text-center justify-center w-full"
        >
          <img
            src="/img/auge.png"
            class="w-12 lg:w-32 h-auto mb-4 sm:mb-5 scale-x-[-1]"
          />
          <h2 class="text-4xl font-bold cinzel-500 mx-6 cinematic-heading break-words">
            {{ t.about.eye.title }}
          </h2>
        </div>
        <p class="text-lg text-gray-300 poppins-300 max-w-3xl mx-auto">
          {{ t.about.eye.description }}
        </p>
      </section>
    </client-only>

    <!-- SECTION: Testimonials -->
    <client-only>
      <section
        class="py-28 px-4 sm:px-8 lg:px-16 overflow-hidden"
        data-aos="zoom-in"
      >
        <div
          class="flex flex-col items-center justify-center text-center w-full mb-8"
        >
          <img
            src="/img/auge.png"
            class="w-12 lg:w-32 h-auto mb-4 scale-x-[-1]"
          />
          <h2
            class="text-3xl sm:text-4xl font-bold cinzel-500 mx-6 cinematic-heading break-words"
          >
            {{ t.about.testimonials.title }}<br />
            {{ t.about.testimonials.subtitle }}
          </h2>
        </div>

        <!-- Hinweis -->
        <p class="text-sm text-center text-gray-500 italic">
          {{ t.about.testimonials.note }}
        </p>

        <!-- Swiper -->
        <div class="w-full sm:px-6 lg:px-12 overflow-hidden">
          <Swiper
            v-if="testimonials && testimonials.length > 0"
            :modules="[Pagination, Navigation]"
            :pagination="{ clickable: true }"
            :navigation="true"
            :spaceBetween="spaceBetween"
            class="overflow-hidden"
          >
            <SwiperSlide
              v-for="testimonial in testimonials"
              :key="testimonial.name"
            >
              <div
                class="w-full max-w-3xl mx-auto py-12 px-4 sm:px-8 box-border overflow-hidden"
              >
                <div
                  class="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] border border-[#d4af37]/20 modern-card cinematic-hover"
                >
                  <!-- Tattoo Bild -->
                  <img
                    :src="testimonial.image"
                    class="w-full lg:w-1/2 h-64 lg:h-[500px] object-cover rounded-xl"
                  />

                  <!-- Textbereich -->
                  <div
                    class="text-left lg:w-1/2 flex flex-col justify-center h-full font-poppins text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-gray-300 hyphens-auto"
                  >
                    <!-- Zitat Icon -->
                    <svg
                      class="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                      />
                    </svg>

                    <!-- Zitattext -->
                    <blockquote
                      class="poppins-300 text-sm md:text-base lg:text-lg italic leading-relaxed break-words"
                    >
                      {{ testimonial.text }}
                    </blockquote>

                    <!-- Name + Avatar -->
                    <div class="mt-6 flex items-center gap-4">
                      <img
                        :src="testimonial.avatar"
                        class="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                      />
                      <footer class="text-sm font-semibold text-white">
                        {{ testimonial.name }}
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </client-only>

    <client-only>
      <!-- SECTION: CTA -->
      <section
        class="pb-24 pt-12 px-6 max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <div
          class="flex flex-col items-center justify-center text-center w-full mb-8"
        >
          <img
            src="/img/auge.png"
            class="w-12 lg:w-32 h-auto mb-4 scale-x-[-1]"
          />
          <h2 class="text-4xl font-bold cinzel-500 cinematic-heading break-words">
            {{ t.about.cta.title }}
          </h2>
        </div>
        <p class="text-lg poppins-300 mb-6">
          {{ t.about.cta.description }}
        </p>
        <!-- "Book" Button -->
        <NuxtLink
          to="/#BookingForm"
          class="cinzel-500 cta-button cta-button-primary inline-block px-8 py-3 text-lg sm:text-xl font-bold text-white rounded-xl shadow-[0_8px_32px_rgba(212,175,55,0.4)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.6)]"
        >
          {{ t.about.cta.button }}
        </NuxtLink>
      </section>
    </client-only>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, computed, watch } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Register Swiper components globally for client-side rendering
// This might help resolve the "Invalid vnode type" error with client-only
if (process.client) {
  // No direct global registration needed in Nuxt 3 with auto-imports,
  // but ensuring the imports are processed client-side is key.
  // The error might be due to a subtle interaction with Nuxt's auto-imports
  // and the client-only component.
}
import { useI18n } from "~/composables/useI18n";

const { t, currentLanguage, languages } = useI18n();

// Debug: Überprüfe die geladenen Sprachen
console.log("🔍 useI18n Debug:", {
  currentLanguage: currentLanguage?.value,
  languagesExist: !!languages,
  deExists: !!languages?.de?.locale,
  enExists: !!languages?.en?.locale,
  aboutExists: !!languages?.de?.locale?.about,
  testimonialsExist: !!languages?.de?.locale?.about?.testimonials,
});
const spaceBetween = ref(32); // Default Abstand
const swiperRef = ref(null);

// Für About-Seite
import { useSeoAbout } from "~/composables/useSeo";
useSeoAbout();

const personalImages = ["/img/me/hunt-hocke.jpg", "/img/me/hunt-front.jpg"];

// Testimonials data - direkt aus den Sprachdateien
const testimonials = computed(() => {
  // Verwende die Sprachen direkt anstatt der t computed property
  const currentLang = currentLanguage.value;
  const currentLocale = languages[currentLang]?.locale;

  if (currentLocale?.about?.testimonials) {
    const testimonialsData = [
      {
        name: currentLocale.about.testimonials.maikG.name,
        text: currentLocale.about.testimonials.maikG.text,
        image: "/img/healedTattoos/dryade.jpg",
        avatar: "/img/testimonials/maik-g.png",
      },
      {
        name: currentLocale.about.testimonials.niklasW.name,
        text: currentLocale.about.testimonials.niklasW.text,
        image: "/img/healedTattoos/fvahik.jpg",
        avatar: "/img/testimonials/niklas-w.png",
      },
    ];

    console.log("✅ Using direct language data:", {
      language: currentLang,
      data: testimonialsData,
    });
    return testimonialsData;
  }

  // Fallback: Verwende deutsche Standarddaten
  console.log("⚠️ Using fallback testimonials data");
  return [
    {
      name: "Maik G.",
      text: "Mika hat meine Erwartungen übertroffen! Das Tattoo ist nicht nur wunderschön, sondern hat auch eine tiefe Bedeutung für mich. Die Atmosphäre im Studio war super entspannt und professionell. Ich komme auf jeden Fall wieder!",
      image: "/img/healedTattoos/dryade.jpg",
      avatar: "/img/testimonials/maik-g.png",
    },
    {
      name: "Niklas W.",
      text: "Ich bin absolut begeistert von meinem neuen Tattoo. Mika hat meine Ideen perfekt umgesetzt und sogar noch verbessert. Die Qualität der Arbeit ist top und der Heilungsprozess war unkompliziert. Danke für dieses Kunstwerk!",
      image: "/img/healedTattoos/fvahik.jpg",
      avatar: "/img/testimonials/niklas-w.png",
    },
  ];
});

// Watch für Sprachänderungen - force reactive update
watch(currentLanguage, (newLang) => {
  console.log("🔄 Language changed to:", newLang);
  nextTick(() => {
    console.log("🔄 Testimonials after language change:", testimonials.value);
  });
});

onMounted(() => {
  AOS.init({ duration: 800, once: true });
  if (window.innerWidth < 640) {
    // sm breakpoint Tailwind
    spaceBetween.value = 16; // kleinerer Abstand auf mobil
  }
  // Use nextTick to ensure DOM is updated before interacting with Swiper
  nextTick(() => {
    if (swiperRef.value?.swiper) {
      swiperRef.value.swiper.update(); // force update
      swiperRef.value.swiper.slideTo(0, 0); // setze initial auf Slide 0 ohne Animation
    }
  });
});
</script>

<style scoped>
body,
html {
  max-width: 100vw;
  overflow-x: hidden;
}

.swiper-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

:deep(.swiper-pagination-bullet) {
  background: #999999;
}

:deep(.swiper-pagination-bullet-active) {
  background: #d4af37;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.6);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #d4af37 !important;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
}
</style>
