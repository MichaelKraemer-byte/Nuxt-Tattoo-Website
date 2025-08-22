<template>
  <client-only>
    <div
      id="BookingForm"
      class="max-w-full sm:max-w-2xl mx-auto px-6 py-8 sm:p-8 bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 backdrop-blur-sm rounded-2xl shadow-2xl text-white space-y-8 mb-40 poppins-200 border border-zinc-700/50"
      data-aos="fade-in"
    >
      <div class="text-center space-y-3">
        <h2
          class="!text-2xl lg:!text-4xl cinzel-500 cinematic-heading hyphens-auto"
        >
          {{ t.form.title }}
        </h2>
      </div>

      <form
        @submit.prevent="submitForm"
        enctype="multipart/form-data"
        class="space-y-6"
        required
      >
        <!-- Botcheck -->
        <input type="hidden" name="botcheck" v-model="botcheck" />

        <!-- Name -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-zinc-300">{{
              t.form.firstName
            }}</label>
            <input
              maxlength="50"
              v-model="form.firstName"
              type="text"
              required
              :placeholder="t.form.placeholder.firstName"
              class="w-full bg-zinc-800/80 text-white border border-zinc-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-300 hover:border-zinc-500/70 placeholder-zinc-500"
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-zinc-300">{{
              t.form.lastName
            }}</label>
            <input
              maxlength="50"
              v-model="form.lastName"
              type="text"
              required
              :placeholder="t.form.placeholder.lastName"
              class="w-full bg-zinc-800/80 text-white border border-zinc-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-300 hover:border-zinc-500/70 placeholder-zinc-500"
            />
          </div>
        </div>

        <!-- Email -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-zinc-300">{{
            t.form.email
          }}</label>
          <input
            maxlength="50"
            v-model="form.email"
            type="email"
            required
            :placeholder="t.form.placeholder.email"
            class="w-full bg-zinc-800/80 text-white border border-zinc-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-300 hover:border-zinc-500/70 placeholder-zinc-500"
          />
        </div>

        <!-- Telefonnummer -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-zinc-300">{{
            t.form.phone
          }}</label>
          <input
            maxlength="30"
            v-model="form.phone"
            type="tel"
            required
            :placeholder="t.form.placeholder.phone"
            class="w-full bg-zinc-800/80 text-white border border-zinc-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-300 hover:border-zinc-500/70 placeholder-zinc-500"
          />
        </div>

        <!-- Volljährigkeit -->
        <div
          class="flex items-center space-x-3 p-4 bg-zinc-800/50 rounded-lg border border-zinc-600/30 flex-nowrap"
        >
          <input
            maxlength="50"
            id="isAdult"
            v-model="form.isAdult"
            type="checkbox"
            required
            class="w-5 h-5 bg-zinc-700 border-zinc-500 rounded cursor-pointer focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-zinc-800 flex-shrink-0"
          />
          <label
            for="isAdult"
            class="text-white select-none cursor-pointer text-sm"
          >
            {{ t.form.ageConfirmation }}
          </label>
        </div>

        <!-- Wunschdatum -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-zinc-300">{{
            t.form.date
          }}</label>
          <FormDatepicker v-model="form.date" :asap="form.asap" />
        </div>

        <!-- Wunschstelle (Dropdown-Komponente) -->
        <Dropdown v-model="form.spot" />

        <!-- Beschreibung mit Tooltip -->
        <div class="relative space-y-2">
          <label class="items-center gap-2 group cursor-pointer flex">
            <span class="text-sm font-medium text-zinc-300">{{
              t.form.tattooDescription
            }}</span>
            <span
              class="text-[#d4af37] text-lg hover:scale-110 transition-transform duration-200"
              >❔</span
            >
            <div class="relative mb-1">
              <div
                class="pointer-events-none absolute top-full inset-x-0 mx-auto mt-2 w-full max-w-[90vw] sm:max-w-[20rem] text-sm bg-zinc-800/95 backdrop-blur-sm border border-[#d4af37]/50 text-white p-4 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
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
            class="w-full bg-zinc-800/80 text-white border border-zinc-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-300 hover:border-zinc-500/70 placeholder-zinc-500 custom-scrollbar resize-none"
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
        <div
          class="flex items-start space-x-3 p-4 bg-zinc-800/50 rounded-lg border border-zinc-600/30 flex-nowrap"
        >
          <input
            maxlength="50"
            id="privacyPolicy"
            v-model="form.privacyPolicy"
            type="checkbox"
            required
            class="w-5 h-5 mt-1 bg-zinc-700 border-zinc-500 rounded cursor-pointer focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-zinc-800 flex-shrink-0"
          />
          <label
            for="privacyPolicy"
            class="text-white text-sm cursor-pointer leading-relaxed"
          >
            {{ t.form.privacyAndAgeConsent }}
            <nuxt-link
              to="/shared/privacy-policy"
              class="text-[#d4af37] hover:text-[#f4d03f] hover:underline poppins-200 text-sm transition-colors duration-200"
            >
              {{ t.navigation.privacyPolicy }}
            </nuxt-link>
          </label>
        </div>

        <p
          v-if="validationError"
          class="text-center text-sm text-red-300 bg-red-900/30 border border-red-600/50 rounded-lg px-4 py-3 transition-all duration-300 ease-in-out backdrop-blur-sm"
        >
          {{ validationError }}
        </p>

        <!-- Absenden -->
        <button
          type="submit"
          class="w-full cursor-pointer cinzel-500 cta-button cta-button-primary inline-block px-8 py-4 text-lg font-bold text-white rounded-xl shadow-[0_8px_32px_rgba(212,175,55,0.4)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.6)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          :class="{
            'opacity-50 cursor-not-allowed hover:bg-transparent hover:scale-100 hover:translate-y-0':
              isInSubmitProcess,
          }"
          :disabled="isInSubmitProcess"
        >
          {{ t.form.submit }}
        </button>

        <!-- Fortschrittsanzeige beim Senden -->
        <div
          v-if="isInSubmitProcess"
          class="relative w-full h-3 bg-zinc-700/50 rounded-full overflow-hidden mb-4 backdrop-blur-sm"
        >
          <div
            class="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full animate-progress shadow-lg"
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
/* Custom Scrollbar für das Textarea */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(39, 39, 42, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #f4d03f, #d4af37);
}

/* Input Focus Animation */
input:focus,
textarea:focus {
  transform: scale(1.01);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1), 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Checkbox Styling */
input[type="checkbox"] {
  appearance: none;
  background: linear-gradient(135deg, #3f3f46, #52525b);
  border: 2px solid #6b7280;
  transition: all 0.3s ease;
}

input[type="checkbox"]:checked {
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-color: #f4d03f;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
}

input[type="checkbox"]:hover {
  border-color: #d4af37;
  transform: scale(1.05);
}

/* Progress Bar Animation */
@keyframes animate-progress {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-progress {
  background-size: 200% 200%;
  animation: animate-progress 2s ease-in-out infinite;
}

/* Form Container Hover Effect */
#BookingForm {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#BookingForm:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1);
}

/* Label Hover Effect */
label:hover {
  color: #d4af37;
  transition: color 0.3s ease;
}

/* Input Placeholder Animation */
input::placeholder,
textarea::placeholder {
  transition: opacity 0.3s ease;
}

input:focus::placeholder,
textarea:focus::placeholder {
  opacity: 0.7;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  #BookingForm {
    margin: 0 1rem 2rem 1rem;
    padding: 1.5rem;
  }

  .grid {
    gap: 1rem;
  }
}

/* Dark Mode Enhancements */
@media (prefers-color-scheme: dark) {
  #BookingForm {
    background: linear-gradient(
      135deg,
      rgba(24, 24, 27, 0.98),
      rgba(39, 39, 42, 0.95)
    );
    border-color: rgba(82, 82, 91, 0.3);
  }
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  #BookingForm,
  input,
  textarea,
  button {
    transition: none;
    animation: none;
  }

  #BookingForm:hover {
    transform: none;
  }
}
</style>
