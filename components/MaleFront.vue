<template>
  <div class="w-full flex flex-col items-center gap-4">
    <div class="relative max-w-xl w-full">
      <svg viewBox="0 0 800 1600" class="w-full h-auto" @click.stop>
        <!-- Realistischer Körper im Hintergrund -->
        <image
          href="/images/bodies/male-front.png"
          x="0"
          y="0"
          width="800"
          height="1600"
        />
        <path
          v-for="zone in zones"
          :key="zone.id"
          :d="zone.path"
          :data-id="zone.id"
          :class="[
            'cursor-pointer transition-all duration-200',
            selectedZones.includes(zone.id)
              ? 'fill-orange-500/40 stroke-orange-500 stroke-[2]'
              : 'fill-transparent stroke-transparent',
            hoverZone === zone.id ? 'fill-orange-400/30' : '',
          ]"
          @mouseenter="hoverZone = zone.id"
          @mouseleave="hoverZone = null"
          @click.stop="toggleZone(zone.id)"
        />
      </svg>
    </div>

    <!-- Optional: ausgewählte Zonen anzeigen -->
    <div class="text-white text-sm text-center">
      <p>Ausgewählte Bereiche:</p>
      <div class="text-orange-400 break-words">
        {{ selectedZones.join(", ") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedZones = ref([]);
const hoverZone = ref(null);

const zones = [
  {
    id: "head",
    name: "Kopf",
    d: "M160,50c10,-15 30,-15 40,0c5,10 5,20 0,30c-10,15 -30,15 -40,0c-5,-10 -5,-20 0,-30z",
  },
  {
    id: "neck",
    name: "Hals",
    d: "M165,80c10,5 30,5 40,0l0,15c-10,5 -30,5 -40,0z",
  },
  {
    id: "shoulder-left",
    name: "Schulter Links",
    d: "M145,85c-10,5 -20,20 -20,35c10,5 20,5 30,0z",
  },
  {
    id: "shoulder-right",
    name: "Schulter Rechts",
    d: "M245,85c10,5 20,20 20,35c-10,5 -20,5 -30,0z",
  },
  {
    id: "chest-left",
    name: "Brust Links",
    d: "M165,95c-10,10 -15,30 -10,40c10,5 30,5 40,-5c-5,-10 -15,-25 -30,-35z",
  },
  {
    id: "chest-right",
    name: "Brust Rechts",
    d: "M215,95c10,10 15,30 10,40c-10,5 -30,5 -40,-5c5,-10 15,-25 30,-35z",
  },
  {
    id: "ribs-left",
    name: "Rippen Links",
    d: "M155,130c-10,5 -15,20 -10,35c15,5 25,5 30,0c-5,-10 -10,-25 -20,-35z",
  },
  {
    id: "ribs-right",
    name: "Rippen Rechts",
    d: "M225,130c10,5 15,20 10,35c-15,5 -25,5 -30,0c5,-10 10,-25 20,-35z",
  },
  {
    id: "stomach",
    name: "Bauch",
    d: "M175,150c10,10 40,10 50,0c0,15 0,30 0,45c-10,10 -40,10 -50,0z",
  },
  {
    id: "hip",
    name: "Hüfte",
    d: "M170,195c10,10 50,10 60,0l0,10c-10,15 -50,15 -60,0z",
  },
  {
    id: "pelvis",
    name: "Unterbauch",
    d: "M170,205c10,10 50,10 60,0c0,10 0,20 0,25c-10,10 -50,10 -60,0z",
  },
  {
    id: "upper-arm-left",
    name: "Oberarm Links",
    d: "M130,120c-5,20 -5,50 5,70c10,5 20,5 30,0c-5,-25 -10,-45 -15,-70z",
  },
  {
    id: "forearm-left",
    name: "Unterarm Links",
    d: "M135,190c-5,15 -5,35 0,50c10,5 20,5 30,0c-5,-15 -10,-30 -15,-50z",
  },
  {
    id: "hand-left",
    name: "Hand Links",
    d: "M140,240c0,10 15,15 25,15c5,-5 5,-15 0,-25c-10,-5 -20,-5 -25,10z",
  },
  {
    id: "upper-arm-right",
    name: "Oberarm Rechts",
    d: "M270,120c5,20 5,50 -5,70c-10,5 -20,5 -30,0c5,-25 10,-45 15,-70z",
  },
  {
    id: "forearm-right",
    name: "Unterarm Rechts",
    d: "M265,190c5,15 5,35 0,50c-10,5 -20,5 -30,0c5,-15 10,-30 15,-50z",
  },
  {
    id: "hand-right",
    name: "Hand Rechts",
    d: "M260,240c0,10 -15,15 -25,15c-5,-5 -5,-15 0,-25c10,-5 20,-5 25,10z",
  },
  {
    id: "thigh-left",
    name: "Oberschenkel Links",
    d: "M165,235c-5,20 -5,50 0,70c10,5 25,5 35,0c-5,-25 -10,-45 -15,-70z",
  },
  {
    id: "shin-left",
    name: "Schienbein Links",
    d: "M170,300c-5,15 -5,35 0,50c10,5 25,5 35,0c-5,-15 -10,-30 -15,-50z",
  },
  {
    id: "foot-left",
    name: "Fuß Links",
    d: "M175,355c0,10 10,15 25,15c10,0 10,-10 0,-20c-10,-5 -20,-5 -25,5z",
  },
  {
    id: "thigh-right",
    name: "Oberschenkel Rechts",
    d: "M205,235c5,20 5,50 0,70c-10,5 -25,5 -35,0c5,-25 10,-45 15,-70z",
  },
  {
    id: "shin-right",
    name: "Schienbein Rechts",
    d: "M200,300c5,15 5,35 0,50c-10,5 -25,5 -35,0c5,-15 10,-30 15,-50z",
  },
  {
    id: "foot-right",
    name: "Fuß Rechts",
    d: "M195,355c0,10 -10,15 -25,15c-10,0 -10,-10 0,-20c10,-5 20,-5 25,5z",
  },
];

const toggleZone = (id) => {
  if (selectedZones.value.includes(id)) {
    selectedZones.value = selectedZones.value.filter((z) => z !== id);
  } else {
    selectedZones.value.push(id);
  }
};
</script>

<style scoped>
/* Optional: cursor für Hover verbessern */
path {
  cursor: pointer;
}
</style>
