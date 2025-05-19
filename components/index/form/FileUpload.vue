<template>
  <div>
    <!-- Label als Button -->
    <label
      for="fileUpload"
      tabindex="0"
      class="inline-block cursor-pointer border border-zinc-600 text-white px-4 py-2 rounded-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      Referenzbilder auswählen (max. 3 Dateien)
    </label>

    <!-- Unsichtbares File-Input -->
    <input
      id="fileUpload"
      type="file"
      multiple
      accept="image/*"
      @change="handleFileUpload"
      class="hidden"
    />

    <!-- Bildvorschau -->
    <div class="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
      <div
        v-for="(file, index) in files"
        :key="index"
        class="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 border border-orange-500 border-2 rounded-sm overflow-hidden"
      >
        <button
          @click="removeFile(index)"
          class="absolute top-1 right-1 bg-black/70 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 cursor-pointer"
          aria-label="Bild entfernen"
        >
          ✖
        </button>
        <img
          :src="file.preview"
          alt="Preview"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <!-- Visuelle Fehlermeldung -->
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p
        v-if="showHint"
        class="text-yellow-400 text-sm mt-2 bg-zinc-800 border border-yellow-500 px-3 py-2 rounded-sm flex items-start gap-2"
      >
        📸
        <span>
          Ein Beispielbild hilft mir total, deine Idee besser zu verstehen 😊🙏
        </span>
      </p>
    </transition>

    <!-- Pflichtfeld-Fehlermeldung -->
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p v-if="showRequiredError" class="text-red-500 text-sm mt-1">
        Bitte lade mindestens ein Referenzbild hoch.
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  files: Array,
  required: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:files"]);

// Hinweis wird kurz angezeigt, wenn kein Bild da ist (nicht Pflicht-Fehler)
const showHint = ref(false);
const showRequiredError = ref(false);

const handleFileUpload = (event) => {
  const selected = Array.from(event.target.files);
  const remainingSlots = 3 - props.files.length;
  if (remainingSlots <= 0) return;

  const filesToAdd = selected.slice(0, remainingSlots).map((file) => ({
    file,
    preview: URL.createObjectURL(file),
  }));

  emit("update:files", [...props.files, ...filesToAdd]);
  event.target.value = null;
  showHint.value = false;
  showRequiredError.value = false;
};

const removeFile = (index) => {
  const updated = [...props.files];
  const removed = updated.splice(index, 1)[0];
  if (removed?.preview) URL.revokeObjectURL(removed.preview);
  emit("update:files", updated);
};

// Validierung bei Submit triggern
defineExpose({
  validateFiles() {
    if (props.required && props.files.length === 0) {
      showHint.value = true;
      showRequiredError.value = true;
      return false;
    }
    return true;
  },
});
</script>
