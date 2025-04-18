<template>
  <div
    class="max-w-2xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-xl text-white space-y-6"
  >
    <h2 class="text-3xl font-bold text-orange-500">📅 Termin-Anfrage</h2>

    <form @submit.prevent="submitForm" class="space-y-5">
      <!-- Name -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1">Vorname</label>
          <input
            v-model="form.firstName"
            type="text"
            required
            class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label class="block mb-1">Nachname</label>
          <input
            v-model="form.lastName"
            type="text"
            required
            class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <!-- Volljährigkeit -->
      <div class="flex items-center space-x-2">
        <input
          id="isAdult"
          v-model="form.isAdult"
          type="checkbox"
          required
          class="w-5 h-5 text-orange-500 bg-zinc-800 border-zinc-600 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        <label for="isAdult" class="text-white select-none cursor-pointer">
          Ich bin volljährig (18+)
        </label>
      </div>

      <!-- Wunschdatum -->
      <div>
        <label class="block mb-1">Wunschdatum</label>
        <FormDatepicker v-model="form.date" :asap="form.asap" />
      </div>

      <!-- Wunschstelle (Dropdown-Komponente) -->
      <Dropdown v-model="form.spot" />

      <!-- Beschreibung mit Tooltip -->
      <div class="relative">
        <label class="block mb-1 flex items-center gap-2">
          Beschreibung / Idee
          <div class="relative group cursor-pointer">
            <span class="text-orange-400">❔</span>
            <div
              class="absolute left-5 top-full mt-1 w-72 text-sm bg-zinc-800 border border-orange-500 text-white p-3 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10"
            >
              Beschreibe bitte so genau wie möglich: Motiv, Größe, Platzierung
              am Körper, Stil (Realistic, Linework, Blackwork etc.), Farben,
              Bedeutung – alles was wichtig sein könnte.
            </div>
          </div>
        </label>
        <textarea
          v-model="form.description"
          rows="4"
          class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
      </div>

      <!-- Datei-Upload -->
      <div>
        <label class="block mb-1">Referenzbilder (max. 3 Dateien)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          @change="handleFileUpload"
          class="rounded-sm"
        />
        <p class="text-sm text-gray-400 mt-1">
          {{ form.files.length }}/3 ausgewählt
        </p>
      </div>

      <!-- Kontakt Buttons -->
      <div class="flex gap-4 mt-4">
        <a
          :href="instagramLink"
          target="_blank"
          class="bg-orange-500 text-black px-4 py-2 rounded-sm hover:bg-orange-400 transition"
          >Instagram</a
        >
        <a
          :href="whatsappLink"
          target="_blank"
          class="bg-green-500 text-black px-4 py-2 rounded-sm hover:bg-green-400 transition"
          >WhatsApp</a
        >
      </div>

      <!-- Absenden -->
      <button
        type="submit"
        class="mt-6 w-full bg-orange-500 px-6 py-3 rounded-sm hover:bg-orange-400 transition"
      >
        Anfrage senden
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Sicherstellen, dass alle relevanten Elemente 4px Border-Radius haben */
input,
textarea,
button,
a {
  border-radius: 4px;
}
</style>

<script setup>
import { ref } from "vue";
import FormDatepicker from "./FormDatepicker.vue";

// Formular
const form = ref({
  firstName: "",
  lastName: "",
  isAdult: false,
  spot: "",
  date: "",
  description: "",
  files: [],
});

const instagramLink = "https://instagram.com/deinprofil";
const whatsappLink = `https://wa.me/4915734434856?text=${encodeURIComponent(
  "Hey! Ich möchte einen Tattoo-Termin anfragen 😊"
)}`;

const dateError = ref(false);

// Datei-Upload max 3
const handleFileUpload = (event) => {
  const selectedFiles = Array.from(event.target.files).slice(0, 3);
  form.value.files = selectedFiles;
};

const submitForm = () => {
  if (dateError.value) {
    alert("Bitte wähle einen gültigen Tag (Fr–Mo).");
    return;
  }

  if (!form.value.isAdult) {
    alert("Du musst volljährig sein.");
    return;
  }

  // Hier: Backend call oder Mail etc.
  console.log("Gesendet:", form.value);
  alert("Danke für deine Anfrage! Ich melde mich bald.");
};

const handleClickOutside = (event) => {
  const inputElement = document.querySelector(
    "input[placeholder='z. B. linker Unterarm']"
  );
  const dropdown = document.querySelector("ul");

  if (
    inputElement &&
    dropdown &&
    !inputElement.contains(event.target) &&
    !dropdown.contains(event.target)
  ) {
    filteredSpots.value = [];
  }
};

// Dropdown-Logik
const filteredSpots = ref([]);
</script>
