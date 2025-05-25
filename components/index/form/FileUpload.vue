<template>
  <div>
    <!-- Normaler Upload Button / Bereich -->
    <button
      @click="triggerFileInput"
      class="border border-zinc-600 text-white px-4 py-2 rounded-sm hover:bg-zinc-700 cursor-pointer"
    >
      Referenzbilder auswählen (max. 3 Dateien)
    </button>

    <input
      id="fileUpload"
      type="file"
      multiple
      accept="image/*"
      ref="fileInput"
      @change="handleFileUpload"
      class="hidden"
    />

    <!-- Bildvorschau wie gehabt -->
    <div class="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
      <div
        v-for="(file, index) in files"
        :key="index"
        class="relative w-24 h-24 border border-orange-500 rounded-sm overflow-hidden"
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

    <!-- Vollbild Drag & Drop Overlay -->
    <transition name="fade">
      <div
        v-if="isDragOver"
        @dragover.prevent
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        class="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-lg z-50 select-none"
      >
        <p class="mb-2">Dateien hierher ziehen, um hochzuladen</p>
        <button
          @click="cancelDrag"
          class="mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-black"
        >
          Abbrechen
        </button>
      </div>
    </transition>

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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const showHint = ref(false);
const showRequiredError = ref(false);

const props = defineProps({
  files: Array,
  required: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:files"]);

const fileInput = ref(null);
const isDragOver = ref(false);
let dragCounter = 0; // Zählt, wie viele dragenter ohne passenden dragleave sind

const MAX_FILES = 3;

const handleFileUpload = (event) => {
  const selected = Array.from(event.target.files);
  addFiles(selected);
  event.target.value = null;
};

const addFiles = (newFiles) => {
  const remainingSlots = MAX_FILES - props.files.length;
  if (remainingSlots <= 0) return;

  const filesToAdd = newFiles.slice(0, remainingSlots).map((file) => ({
    file,
    preview: URL.createObjectURL(file),
  }));

  emit("update:files", [...props.files, ...filesToAdd]);
};

const removeFile = (index) => {
  const updated = [...props.files];
  const removed = updated.splice(index, 1)[0];
  if (removed?.preview) URL.revokeObjectURL(removed.preview);
  emit("update:files", updated);
};

const onDragEnter = (event) => {
  if (event.dataTransfer.types.includes("Files")) {
    dragCounter++;
    isDragOver.value = true;
  }
};

const onDragLeave = (event) => {
  dragCounter--;
  if (dragCounter <= 0) {
    dragCounter = 0;
    isDragOver.value = false;
  }
};

const onDrop = (event) => {
  isDragOver.value = false;
  dragCounter = 0;
  const droppedFiles = Array.from(event.dataTransfer.files);
  addFiles(droppedFiles);
};

const cancelDrag = () => {
  isDragOver.value = false;
  dragCounter = 0;
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

onMounted(() => {
  window.addEventListener("dragenter", onDragEnter);
  window.addEventListener("dragleave", onDragLeave);
  window.addEventListener("drop", (e) => e.preventDefault());
  window.addEventListener("dragover", (e) => e.preventDefault());
});

onBeforeUnmount(() => {
  window.removeEventListener("dragenter", onDragEnter);
  window.removeEventListener("dragleave", onDragLeave);
  window.removeEventListener("drop", (e) => e.preventDefault());
  window.removeEventListener("dragover", (e) => e.preventDefault());
});

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
