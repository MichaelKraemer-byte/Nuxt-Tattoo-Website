<template>
  <div class="relative" ref="dropdownRef">
    <label class="block mb-1">{{ t.form.placement }}</label>
    <input
      maxlength="50"
      required
      v-model="query"
      type="text"
      :placeholder="t.form.placeholder.placement"
      @input="filterSpots"
      @keydown.down.prevent="highlightNext"
      @keydown.up.prevent="highlightPrev"
      @keydown.enter.prevent="selectHighlighted"
      class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <!-- Vorschlagsliste -->
    <ul
      v-if="filteredSpots.length > 0"
      class="absolute z-20 bg-zinc-800 border border-zinc-700 mt-1 w-full rounded-sm shadow-lg max-h-48 overflow-y-auto"
    >
      <!-- 💬 Hinweis oben -->
      <div
        class="px-4 py-2 text-xs text-gray-400 border-b border-zinc-700 bg-zinc-800 sticky top-0 z-10"
      >
        {{ t.form.dropdownHint }}
      </div>

      <li
        v-for="(spot, index) in filteredSpots"
        :key="index"
        @click="selectSpot(spot)"
        @keydown.enter.prevent="selectSpot(spot)"
        tabindex="0"
        :class="[
          'px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black',
          index === highlightedIndex ? 'bg-orange-500 text-black' : '',
        ]"
      >
        {{ spot }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { spotSuggestions } from "~/utils/spotSuggestions.js";
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();

// Referenz auf die gesamte Komponente
const dropdownRef = ref(null);
let ignoreNextUpdate = false;

// Prop und Emit für die Verbindung zu v-model
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    filteredSpots.value = [];
    highlightedIndex.value = -1;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const emit = defineEmits(["update:modelValue"]);

// Lokale Reaktive Variablen
const query = ref(props.modelValue); // Verknüpft den query-Wert mit modelValue
const filteredSpots = ref([]);
const highlightedIndex = ref(-1);

// Wenn query geändert wird, filtern wir die Vorschläge
const filterSpots = () => {
  const searchQuery = query.value.toLowerCase();
  if (searchQuery.length === 0) {
    filteredSpots.value = [];
    highlightedIndex.value = -1;
    return;
  }

  filteredSpots.value = spotSuggestions.filter((s) =>
    s.toLowerCase().includes(searchQuery)
  );
  highlightedIndex.value = -1;
};

// Spot auswählen (bei Klick oder Enter)
const selectSpot = (spot) => {
  ignoreNextUpdate = true;
  filteredSpots.value = [];
  highlightedIndex.value = -1;
  emit("update:modelValue", spot);
  query.value = spot;
};

// Hervorheben des nächsten Vorschlags
const highlightNext = () => {
  if (highlightedIndex.value < filteredSpots.value.length - 1) {
    highlightedIndex.value++;
  }
};

// Hervorheben des vorherigen Vorschlags
const highlightPrev = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--;
  }
};

const selectHighlighted = () => {
  if (highlightedIndex.value >= 0) {
    const spot = filteredSpots.value[highlightedIndex.value];
    filteredSpots.value = []; // Dropdown sofort schließen
    selectSpot(spot); // Danach den Spot setzen
  }
};

// Überwachen, wenn der `query`-Wert sich ändert
// Bestehender Watcher auf `query`
watch(query, (newVal) => {
  if (ignoreNextUpdate) {
    ignoreNextUpdate = false;
    return;
  }
  filterSpots();

  // Bei manueller Eingabe auch Wert ans Parent schicken
  emit("update:modelValue", newVal);
});

// Neuer Watcher auf externes `modelValue` (props)
watch(
  () => props.modelValue,
  (newVal) => {
    query.value = newVal;
  }
);
</script>

<style scoped>
/* Styles können hier hinzugefügt werden */
</style>
