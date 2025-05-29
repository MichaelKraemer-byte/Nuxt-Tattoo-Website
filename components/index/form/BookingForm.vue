<template>
  <div
    id="BookingForm"
    class="max-w-full sm:max-w-2xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-xl text-white space-y-6"
  >
    <h2 class="text-3xl font-bold text-orange-500 cinzel-500">
      📅 Termin-Anfrage
    </h2>

    <form @submit.prevent="submitForm" class="space-y-5">
      <!-- Name -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          class="w-5 h-5 text-orange-500 bg-zinc-800 border-zinc-600 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none cursor-pointer"
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
        <label class="items-center gap-2 group cursor-pointer">
          Beschreibung / Idee
          <span class="text-orange-400">❔</span>
          <div class="relative mb-1">
            <div
              class="pointer-events-none absolute top-full inset-x-0 mx-auto mt-1 w-full max-w-[90vw] sm:max-w-[20rem] text-sm bg-zinc-800 border border-orange-500 text-white p-3 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10"
            >
              Beschreibe bitte so genau wie möglich: Motiv, Größe, Stil
              (Realistic, Linework, Blackwork etc.), Farben, Bedeutung,
              Gesundheitliches – alles was wichtig sein könnte. 🙏
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
      <FileUpload
        :files="form.files"
        required
        ref="fileUploadRef"
        @update:files="(newFiles) => (form.files = newFiles)"
      />

      <!-- Datenschutzerklärung -->
      <div class="flex items-center space-x-2">
        <input
          id="privacyPolicy"
          v-model="form.privacyPolicy"
          type="checkbox"
          required
          class="w-5 h-5 text-orange-500 bg-zinc-800 border-zinc-600 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none cursor-pointer"
        />
        <label for="privacyPolicy" class="text-white cursor-pointer">
          Ich habe die
          <nuxt-link
            to="/shared/privacy-policy"
            class="text-orange-500 hover:underline"
          >
            Datenschutzerklärung
          </nuxt-link>
          gelesen und akzeptiere sie.
        </label>
      </div>

      <!-- Absenden -->
      <button
        type="submit"
        class="mt-6 w-full border-2 border-orange-500 px-6 py-3 rounded-sm hover:bg-orange-400 transition cursor-pointer"
        :class="{
          'opacity-50 cursor-not-allowed hover:bg-transparent':
            isInSubmitProcess,
        }"
        :disabled="isInSubmitProcess"
      >
        Anfrage senden
      </button>
    </form>
    <ConfirmationToast
      v-if="showConfirmation"
      @close="showConfirmation = false"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import FileUpload from "./FileUpload.vue";
import FormDatepicker from "./FormDatepicker.vue";
import Dropdown from "./Dropdown.vue";
import ConfirmationToast from "~/components/ConfirmationToast.vue";

const showConfirmation = ref(false);

// Funktion zum Umwandeln von Dateien in Base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    // Stelle sicher, dass es sich um ein gültiges File-Objekt handelt
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    } else {
      reject(new Error("Die übergebene Datei ist kein gültiges File-Objekt"));
    }
  });
};

// Formular mit Standardwerten initialisieren
const form = ref({
  firstName: "",
  lastName: "",
  isAdult: false,
  spot: "",
  date: "",
  description: "",
  files: [], // Die Dateien werden als Base64 gespeichert
  privacyPolicy: false,
});

const isInSubmitProcess = ref(false);

// Dateien aus localStorage laden (nur im Client)
onMounted(() => {
  if (process.client) {
    form.value.firstName = localStorage.getItem("firstName") || "";
    form.value.lastName = localStorage.getItem("lastName") || "";
    form.value.isAdult = JSON.parse(localStorage.getItem("isAdult")) || false;
    form.value.spot = localStorage.getItem("spot") || "";
    form.value.date = localStorage.getItem("date") || "";
    form.value.description = localStorage.getItem("description") || "";
    form.value.privacyPolicy =
      JSON.parse(localStorage.getItem("privacyPolicy")) || false;

    // Lade und dekodiere die Base64-kodierten Dateien, falls sie existieren
    const filesData = JSON.parse(localStorage.getItem("files") || "[]");

    form.value.files = filesData
      .map((fileData, index) => {
        try {
          if (typeof fileData === "string" && fileData.startsWith("data:")) {
            const byteString = atob(fileData.split(",")[1]); // decode Base64
            const mimeType =
              fileData.match(/^data:(.*?);base64/)?.[1] ||
              "application/octet-stream";

            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uint8Array = new Uint8Array(arrayBuffer);

            for (let i = 0; i < byteString.length; i++) {
              uint8Array[i] = byteString.charCodeAt(i);
            }

            const blob = new Blob([uint8Array], { type: mimeType });
            return new File([blob], `upload-${index + 1}`, { type: mimeType });
          }
        } catch (error) {
          console.warn("Fehler beim Wiederherstellen einer Datei:", error);
          return null;
        }
        return null;
      })
      .filter(Boolean); // Nur gültige Dateien behalten
  }
});

// Speichern der Formulardaten und der Dateien (Base64) in localStorage
watch(
  () => form.value,
  async (newForm) => {
    if (process.client) {
      localStorage.setItem("firstName", newForm.firstName);
      localStorage.setItem("lastName", newForm.lastName);
      localStorage.setItem("isAdult", JSON.stringify(newForm.isAdult));
      localStorage.setItem("spot", newForm.spot);
      localStorage.setItem("date", newForm.date);
      localStorage.setItem("description", newForm.description);
      localStorage.setItem(
        "privacyPolicy",
        JSON.stringify(newForm.privacyPolicy)
      );

      // Konvertiere alle Dateien in Base64 und speichere sie
      const filesBase64 = await Promise.all(
        newForm.files.map((file) => {
          // Überprüfen, ob es sich um ein gültiges File-Objekt handelt
          if (file instanceof File) {
            return fileToBase64(file);
          } else {
            return null;
          }
        })
      );
      localStorage.setItem(
        "files",
        JSON.stringify(filesBase64.filter(Boolean))
      );
    }
  },
  { deep: true } // Um auch tief verschachtelte Änderungen zu überwachen
);

const fileUploadRef = ref(null);

const submitForm = async () => {
  if (!fileUploadRef.value.validateFiles()) return;
  if (!form.value.isAdult || !form.value.privacyPolicy) return;
  if (isInSubmitProcess.value) return;

  isInSubmitProcess.value = true;

  try {
    const validFiles = form.value.files
      .map((f) => f.file)
      .filter((file) => file instanceof File);

    if (validFiles.length !== form.value.files.length) {
      alert("Einige Dateien waren ungültig und wurden übersprungen.");
    }

    const base64Files = await Promise.all(validFiles.map(fileToBase64));

    const res = await $fetch("/api/send-email", {
      method: "POST",
      body: {
        ...form.value,
        files: base64Files,
      },
    });

    if (res.success) {
      showConfirmation.value = true;

      // Formular zurücksetzen:
      form.value = {
        firstName: "",
        lastName: "",
        isAdult: false,
        spot: "",
        date: "",
        description: "",
        files: [],
        privacyPolicy: false,
      };

      // Optional: auch FileUpload-Komponente resetten (falls nötig)
      if (fileUploadRef.value?.reset) {
        fileUploadRef.value.reset();
      }

      // Falls du localStorage nutzt, dann auch dort löschen:
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("isAdult");
      localStorage.removeItem("spot");
      localStorage.removeItem("date");
      localStorage.removeItem("description");
      localStorage.removeItem("privacyPolicy");
      localStorage.removeItem("files");
    } else {
      alert("Fehler beim Senden der E-Mail: " + res.error);
    }
  } catch (err) {
    console.error("Sende-Fehler:", err);
    alert("Es ist ein Fehler aufgetreten.");
  }
  isInSubmitProcess.value = false;
};
</script>
