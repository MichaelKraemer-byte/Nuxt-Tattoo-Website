<template>
  <div
    class="flex justify-center items-center px-8 py-32 sm:px-16 md:px-32 lg:px-40 xl:px-52"
  >
    <!-- Instagram Widget -->
    <iframe
      src="https://cdn.lightwidget.com/widgets/c669fa07b7e05b1ebf5fd46a16427076.html"
      scrolling="no"
      allowtransparency="true"
      class="w-full h-[600px] border-0 overflow-hidden shadow-lg rounded-lg"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Das externe LightWidget-Skript nach dem Mounten der Komponente laden
onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>
