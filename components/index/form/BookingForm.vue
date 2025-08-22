<template>
  <client-only>
    <div
      id="BookingForm"
      class="max-w-full sm:max-w-2xl mx-auto px-4 py-6 sm:p-6 bg-zinc-900 rounded-lg shadow-xl text-white space-y-6 mb-40 poppins-200"
      data-aos="fade-in"
    >
      <h2 class="!text-xl lg:!text-3xl cinzel-500 text-center">
        {{ t.form.title }}
      </h2>

      <form
        @submit.prevent="submitForm"
        enctype="multipart/form-data"
        class="space-y-5"
        required
      >
        <!-- Botcheck -->
        <input type="hidden" name="botcheck" v-model="botcheck" />

        <!-- Name -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1">{{ t.form.name }}</label>
            <input
              maxlength="50"
              v-model="form.firstName"
              type="text"
              required
              :placeholder="t.form.placeholder.name"
              class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label class="block mb-1">{{ t.form.name }}</label>
            <input
              maxlength="50"
              v-model="form.lastName"
              type="text"
              required
              :placeholder="t.form.placeholder.name"
              class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label class="block mb-1">{{ t.form.email }}</label>
          <input
            maxlength="50"
            v-model="form.email"
            type="email"
            required
            :placeholder="t.form.placeholder.email"
            class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <!-- Telefonnummer -->
        <div>
          <label class="block mb-1">{{ t.form.phone }}</label>
          <input
            maxlength="30"
            v-model="form.phone"
            type="tel"
            required
            :placeholder="t.form.placeholder.phone"
            class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <!-- Volljährigkeit -->
        <div class="flex items-center space-x-2">
          <input
            maxlength="50"
            id="isAdult"
            v-model="form.isAdult"
            type="checkbox"
            required
            class="w-5 h-5 bg-zinc-800 border-zinc-600 rounded cursor-pointer"
          />
          <label for="isAdult" class="text-white select-none cursor-pointer">
            {{ t.form.ageConfirmation }}
          </label>
        </div>

        <!-- Wunschdatum -->
        <div>
          <label class="block mb-1">{{ t.form.date }}</label>
          <FormDatepicker v-model="form.date" :asap="form.asap" />
        </div>

        <!-- Wunschstelle (Dropdown-Komponente) -->
        <Dropdown v-model="form.spot" />

        <!-- Beschreibung mit Tooltip -->
        <div class="relative">
          <label class="items-center gap-2 group cursor-pointer">
            {{ t.form.tattooDescription }}
            <span class="text-orange-400">❔</span>
            <div class="relative mb-1">
              <div
                class="pointer-events-none absolute top-full inset-x-0 mx-auto mt-1 w-full max-w-[90vw] sm:max-w-[20rem] text-sm bg-zinc-800 border border-orange-500 text-white p-3 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10"
              >
                {{ t.form.descriptionAdvice }}
              </div>
            </div>
          </label>

          <textarea
            :placeholder="t.form.placeholder.description"
            maxlength="1000"
            minlength="20"
            v-model="form.description"
            rows="4"
            class="w-full bg-zinc-800 text-white border border-zinc-700 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 custom-scrollbar"
          ></textarea>
        </div>

        <!-- Datei-Upload
        <FileUpload
          :files="form.files"
          required
          ref="fileUploadRef"
          @update:files="(newFiles) => (form.files = newFiles)"
        />  -->

        <!-- Datenschutzerklärung -->
        <div class="flex items-start space-x-3">
          <input
            maxlength="50"
            id="privacyPolicy"
            v-model="form.privacyPolicy"
            type="checkbox"
            required
            class="w-10 h-5 mt-1 bg-zinc-800 border-zinc-600 rounded cursor-pointer"
          />
          <label
            for="privacyPolicy"
            class="text-white text-sm cursor-pointer leading-relaxed"
          >
            {{ t.form.privacyAndAgeConsent }}
            <nuxt-link
              to="/shared/privacy-policy"
              class="text-orange-500 hover:underline poppins-200 text-sm"
            >
              {{ t.navigation.privacyPolicy }}
            </nuxt-link>
          </label>
        </div>

        <p
          v-if="validationError"
          class="text-center text-sm text-red-400 bg-red-900 bg-opacity-30 border border-red-600 rounded-sm px-4 py-2 transition-opacity duration-300 ease-in-out"
        >
          {{ validationError }}
        </p>

        <!-- Absenden -->
        <button
          type="submit"
          class="w-full cursor-pointer cinzel-500 btn btn-custom inline-block px-4 py-1.5 text-sm sm:text-lg sm:px-6 sm:py-2 font-medium bg-black hover:bg-orange-500 border-orange-500 border-[2px] rounded-sm shadow-md transition-all transform hover:scale-105"
          :class="{
            'opacity-50 cursor-not-allowed hover:bg-transparent':
              isInSubmitProcess,
          }"
          :disabled="isInSubmitProcess"
        >
          {{ t.form.submit }}
        </button>
        <!-- Fortschrittsanzeige beim Senden -->
        <div
          v-if="isInSubmitProcess"
          class="relative w-full h-2 bg-zinc-700 rounded overflow-hidden mb-4"
        >
          <div
            class="absolute top-0 left-0 h-full bg-orange-500 animate-progress"
            style="width: 100%"
          ></div>
        </div>
      </form>
    </div>
  </client-only>
  <ConfirmationToast
    v-if="showConfirmation"
    @close="showConfirmation = false"
  />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
// import FileUpload from "./FileUpload.vue";
import FormDatepicker from "./FormDatepicker.vue";
import Dropdown from "./Dropdown.vue";
import ConfirmationToast from "~/components/ConfirmationToast.vue";
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();
const botcheck = ref("");
const validationError = ref("");

const showConfirmation = ref(false);

// Funktion zum Umwandeln von Dateien in Base64
const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    if (!(file instanceof File)) {
      resolve(null); // Kein File → null zurückgeben
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => resolve(null); // Fehler → null zurückgeben
    reader.readAsDataURL(file);
  });
};

// Formular mit Standardwerten initialisieren
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isAdult: false,
  spot: "",
  date: "",
  description: "",
  files: [],
  privacyPolicy: false,
});

const isInSubmitProcess = ref(false);

// Dateien aus localStorage laden (nur im Client)
onMounted(() => {
  if (process.client) {
    form.value.firstName = localStorage.getItem("firstName") || "";
    form.value.lastName = localStorage.getItem("lastName") || "";
    form.value.email = localStorage.getItem("email") || "";
    form.value.phone = localStorage.getItem("phone") || "";
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
      localStorage.setItem("email", newForm.email);
      localStorage.setItem("phone", newForm.phone);
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

// const fileUploadRef = ref(null);

const submitForm = async () => {
  // Leere vorherige Fehler
  validationError.value = "";

  // if (!fileUploadRef.value.validateFiles()) return;
  if (
    !form.value.firstName ||
    !form.value.lastName ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.isAdult ||
    !form.value.privacyPolicy
  ) {
    validationError.value = t.form.error;
    setTimeout(() => {
      validationError.value = "";
    }, 5000);
    return;
  }
  if (isInSubmitProcess.value) return;

  isInSubmitProcess.value = true;

  try {
    // FormData erstellen
    const formData = new FormData();
    formData.append("access_key", "95ac643a-7c51-4ac0-b1dd-98b308af0290");
    formData.append("name", `${form.value.firstName} ${form.value.lastName}`);
    formData.append("email", form.value.email);
    formData.append("phone", form.value.phone);
    formData.append("subject", "Neue Buchungsanfrage");
    formData.append(
      "message",
      `📥 Neue Anfrage\n
        👤 Name: ${form.value.firstName} ${form.value.lastName}
        📧 E-Mail: ${form.value.email}
        📞 Telefon: ${form.value.phone}
        🎯 Wunschstelle: ${form.value.spot}
        📅 Wunschdatum: ${form.value.date}
        ✅ Volljährig: ${form.value.isAdult ? "Ja" : "Nein"}
        🔐 Datenschutz akzeptiert: ${form.value.privacyPolicy ? "Ja" : "Nein"}

        📝 Beschreibung:
        ${form.value.description}`
    );
    formData.append("botcheck", ""); // leer lassen

    // Alle Dateien anhängen (echte File-Objekte)
    // form.value.files
    //   .filter((item) => item.file instanceof File)
    //   .forEach((item, index) => {
    //     formData.append("files[]", item.file, item.file.name);
    //   });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData, // ACHTUNG: Kein Content-Type-Header, der wird automatisch gesetzt
    });

    const result = await response.json();

    if (result.success) {
      showConfirmation.value = true;

      // Formular & Speicher zurücksetzen:
      form.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isAdult: false,
        spot: "",
        date: "",
        description: "",
        files: [],
        privacyPolicy: false,
      };

      // fileUploadRef.value?.reset?.();
      localStorage.clear();
      validationError.value = "";
    } else {
      validationError.value = "Fehler beim Senden: " + result.message;
    }
  } catch (error) {
    console.error("Web3Forms Fehler:", error);
    validationError.value =
      "Technischer Fehler: " + (error.message || "Unbekannter Fehler");
  }

  isInSubmitProcess.value = false;
};
</script>

<style scoped>
@keyframes progressBar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.animate-progress {
  animation: progressBar 2.5s linear forwards;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: oklch(0.21 0.006 285.885);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: oklch(0.21 0.006 285.885);
}

textarea.custom-scrollbar {
  scrollbar-color: oklch(0.21 0.006 285.885) transparent;
  scrollbar-width: thin;
}
</style>
