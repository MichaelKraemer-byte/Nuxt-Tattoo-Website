<template>
  <div class="text-white">
    <!-- HERO SECTION -->
    <section
      class="relative h-screen flex flex-col justify-center items-center text-center px-6"
      data-aos="fade-in"
    >
      <NuxtImg
        format="webp"
        src="/img/me/finger-pistole-copy.jpg"
        alt="Tattoo Artist bei der Arbeit"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div class="relative z-10 max-w-3xl">
        <div
          class="flex flex-col sm:flex-row items-center justify-center text-center w-full"
        >
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
          />
          <h1 class="text-5xl sm:text-6xl font-bold cinzel-500 mb-4">
            Ich bin Mika
          </h1>
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:ml-6"
          />
        </div>
        <h4 class="text-3xl cinzel-300 leading-relaxed">
          Künstler, Tätowierer, Abenteurer – mein Weg ist meine Kunst.
        </h4>
        <p class="mt-6 text-lg text-gray-300 cinzel-300">
          Meine Arbeiten erzählen Geschichten, die dich unter deiner Haut
          begleiten.
        </p>
      </div>
    </section>

    <!-- SECTION: Persönliche Vorstellung -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <div class="w-full lg:w-1/2" data-aos="fade-right">
        <NuxtImg
          format="webp"
          src="/img/me/hunt-hocke.jpg"
          alt="Portrait des Künstlers"
          class="rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto"
        />
      </div>
      <div
        class="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-left"
      >
        <div class="flex flex-col sm:flex-row items-center w-full">
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
          />
          <h2 class="text-5xl sm:text-6xl font-bold cinzel-500 mb-4">
            Wer ich bin
          </h2>
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:ml-6"
          />
        </div>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed mb-12">
          Ich bin Wildnispädagoge, Zeichner, Stoiker – heute Tätowierer mit
          Seele. Als Kind wollte ich Künstler sein, doch mein Weg führte erst in
          die Wildnis und Psychologie. Meine Kunst ist Ausdruck, Geschichte und
          Selbstermächtigung.
        </p>
        <h3 class="text-4xl font-bold mb-4 cinzel-500">Warum ich tätowiere</h3>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed">
          Ich liebe es, mit Menschen in die Tiefe zu gehen. Die Haut ist für
          mich nicht nur Leinwand, sondern Schwelle – zwischen Innen und Außen,
          Vergangenheit und Zukunft. Jedes Tattoo ist für mich ein Dialog: Was
          möchtest du zeigen? Woran willst du dich anbinden? Ich tätowiere nicht
          nur, ich begleite Wandlung.
        </p>
      </div>
    </section>

    <!-- SECTION: Timeline "Mein Weg" -->
    <section class="bg-[#0a0a0a] py-24 px-6" data-aos="fade-up">
      <div
        class="flex flex-col sm:flex-row items-center justify-center text-center w-full"
      >
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-13 sm:mr-6 scale-x-[-1]"
        />
        <h2 class="text-4xl font-bold text-center mb-12 cinzel-500">
          Mein Weg
        </h2>
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-13 sm:ml-6"
        />
      </div>
      <ol class="relative border-l border-gray-700 max-w-2xl mx-auto">
        <li class="mb-10 ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">2018: Wildnispädagoge</h3>
          <p class="text-gray-400">
            Ich arbeitete mit Kindern und Jugendlichen, brachte ihnen die Natur
            näher – mein erster bewusster Dienst an etwas Größerem. Doch der
            Wunsch, spirituelle Kunst zu schaffen, begleitete mich leise weiter.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">
            2019: Tattoo-Ausbildung ausgeschlagen
          </h3>
          <p class="text-gray-400">
            Mein damaliger Nachbar in Hannover – ein erfahrener Tätowierer – bot
            mir eine Ausbildung an. Doch ich lehnte ab. Mein Herz schlug zu der
            Zeit noch für die pädagogische Arbeit in der Wildnis.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">2020: Autodidaktischer Einstieg</h3>
          <p class="text-gray-400">
            Die Leidenschaft für Tätowierung ließ mich nicht los. Zwei Jahre
            später griff ich selbst zur Tattoomaschine – ohne Ausbildung, aber
            mit Hingabe. Ich lernte durch Erfahrung, Austausch und stetige
            Praxis.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">2022–2024: Australien</h3>
          <p class="text-gray-400">
            Um künstlerisch frei zu sein, brauchte ich finanzielle
            Unabhängigkeit. In Australien arbeitete ich einsam bis zur
            Erschöpfung – über 16 Monate hinweg, 65 Stunden pro Woche – in
            Küchen, auf Farmen, in riesigen Lagerhallen. Ziel: sparen, um meine
            Vision leben zu können.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">
            2024: Südostasien & Software-Entwicklung
          </h3>
          <p class="text-gray-400">
            Nach dieser intensiven Zeit reiste ich durch Indonesien und Vietnam.
            Ich lernte Motorradfahren, fand Freunde – und begann eine
            Online-Ausbildung zum Software-Entwickler, um remote zu arbeiten und
            meine Kunst ortsunabhängig leben zu können.
          </p>
        </li>
        <li class="ml-6">
          <span
            class="absolute w-4 h-4 bg-orange-600 rounded-full -left-2"
          ></span>
          <h3 class="text-xl font-semibold">
            2024 - 2025: Hunt Atelier Münster
          </h3>
          <p class="text-gray-400">
            Zurück in Deutschland schloss ich meine Ausbildung ab und fand einen
            Platz im Hunt Atelier – einem Studio, das meine Werte teilt. Hier
            lebe ich, was ich bin: Künstler, Tätowierer, jemand, der durch
            Ausdruck heilt und Geschichten auf Haut erzählt.
          </p>
        </li>
      </ol>
    </section>

    <!-- SECTION: Stil & Inspiration -->
    <section
      class="max-w-screen-2xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12"
    >
      <div
        class="w-full lg:w-1/2 swiper-container overflow-hidden rounded-xl"
        data-aos="fade-right"
      >
        <!-- Swipe-Galerie kommt hier rein -->
        <Swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          class="mySwiper"
        >
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/4.jpg"
                class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/15.jpg"
                class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/16.jpg"
                class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/1.jpg"
                class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/9.jpg"
                class="rounded-xl object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative w-full aspect-[3/4]">
              <NuxtImg
                src="/img/freshTattoos/2.jpg"
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
        <div class="flex flex-col sm:flex-row items-center w-full">
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
          />
          <h2 class="text-4xl font-bold mb-4 cinzel-500">Stil & Inspiration</h2>
          <img
            format="webp"
            src="/img/auge.png"
            class="w-32 h-auto mb-4 sm:mb-5 sm:ml-6"
          />
        </div>
        <p class="text-lg text-gray-300 cinzel-300 leading-relaxed">
          Meine Motive sind Ausdruck innerer Welten – mystisch, organisch,
          spirituell. Ich arbeite bevorzugt in Schwarz-Weiß, mit starkem
          Kontrast, feinen Linien und symbolischer Tiefe. Dabei lasse ich mich
          von Formen der Natur als auch Anatomie inspirieren und verwende
          symbolisch das Auge als Kraftquelle der Gegenwärtigkeit. In einem
          freien, intuitiven Prozess verbinde ich diese Elemente mit
          formschaffenden Schattierungen, um Klarheit visuell herauszuarbeiten.
        </p>
      </div>
    </section>

    <!-- SECTION: Das Auge -->
    <section class="bg-[#0a0a0a] py-24 px-6 text-center" data-aos="fade-up">
      <div
        class="flex flex-col sm:flex-row items-center text-center justify-center w-full"
      >
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
        />
        <h2 class="text-4xl font-bold mb-4 cinzel-500">Das Auge</h2>
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-5 sm:ml-6"
        />
      </div>
      <p class="text-lg text-gray-300 cinzel-300 max-w-3xl mx-auto">
        In vielen meiner Tattoos taucht das Auge auf – ein Symbol der
        Achtsamkeit. Es erinnert an den gegenwärtigen Moment, an das Jetzt –
        jenen Raum, in dem alles eins ist: stetig, ewig, ungeteilt. In der
        Präsenz liegt Kraft. Meine Kunst ist eine Einladung, sich zu erinnern –
        immer dann, wenn dein Blick das Tattoo streift und dich aus dem Sog der
        Gedanken zurück ins Sein holt. Ein stiller Ruf an das Bewusstsein: Du
        bist hier. Du bist ganz.
      </p>
    </section>

    <!-- SECTION: Testimonials -->
    <section class="py-24 px-6" data-aos="zoom-in">
      <div
        class="flex flex-col sm:flex-row items-center text-center justify-center w-full"
      >
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-5 sm:mr-6 scale-x-[-1]"
        />
        <h2 class="text-4xl font-bold mb-4 cinzel-500">
          Stimmen meiner Kunden
        </h2>
        <img
          format="webp"
          src="/img/auge.png"
          class="w-32 h-auto mb-4 sm:mb-5 sm:ml-6"
        />
      </div>
      <div class="max-w-3xl mx-auto swiper-container">
        <Swiper :modules="[Pagination]" :pagination="{ clickable: true }">
          <SwiperSlide>
            <blockquote class="text-gray-300 text-center">
              „Mikas Tattoo hat mich tief berührt – nicht nur auf der Haut, auch
              im Herzen.“
              <footer class="mt-4">– Maik G.</footer>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote class="text-gray-300 text-center">
              „Seine Ruhe, seine Fragen, seine Kunst – ein echtes Erlebnis.“
              <footer class="mt-4">– Niklas W.</footer>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote class="text-gray-300 text-center">
              „Seine Ruhe, seine Fragen, seine Kunst – ein echtes Erlebnis.“
              <footer class="mt-4">– Paula W.</footer>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- SECTION: CTA -->
    <section class="text-white py-24 px-6 text-center" data-aos="fade-up">
      <h2 class="text-4xl font-bold mb-6 cinzel-500">
        Lass uns gemeinsam etwas Bedeutendes erschaffen
      </h2>
      <p class="text-lg cinzel-300 mb-6">
        Wenn du bereit bist für mehr als ein Motiv – sondern für ein Zeichen auf
        deinem Weg – dann schreib mir.
      </p>
      <NuxtLink
        to="/#BookingForm"
        class="cinzel-500 inline-block px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition"
      >
        Book Now
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

::v-deep .swiper-pagination-bullet-active {
  background: #f65c1a;
}
</style>
