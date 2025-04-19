<template>
  <div
    class="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-10 z-50 mr-8 hidden md:flex"
  >
    <!-- Instagram -->
    <a
      :href="instagramLink"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-full shadow-md transition"
    >
      <svg
        class="w-6 h-6 md:w-8 md:h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
        />
      </svg>
    </a>

    <!-- WhatsApp -->
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-full shadow-md transition"
    >
      <svg
        class="w-6 h-6 md:w-8 md:h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.5 3.5A10.5 10.5 0 0 0 3.9 17.9L2 22l4.2-1.8A10.5 10.5 0 1 0 20.5 3.5zm-8.4 16a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.5.9.9-2.4-.2-.3a8.2 8.2 0 1 1 6.3 3.2zm4.6-6.2c-.3-.2-1.8-.9-2.0-.9s-.4-.2-.6.2-.7.9-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.7 7.7 0 0 1-1.4-1.8c-.2-.3 0-.4.1-.6l.5-.6a.6.6 0 0 0 .1-.5c0-.1-.5-1.2-.7-1.6s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.4c-.2.2-.9.8-.9 2 0 1.2.9 2.3 1 2.5s1.8 2.7 4.4 3.7a15 15 0 0 0 1.6.6c.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.5s.2-1.4.1-1.5c0 0-.2-.2-.5-.3z"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
const instagramLink = "https://www.instagram.com/mkc.tattooart/";
const whatsappLink = `https://wa.me/4915734434856?text=${encodeURIComponent(
  "Hey! Ich möchte einen Tattoo-Termin anfragen 😊"
)}`;
</script>

<style scoped>
/* Responsivität: Ausblenden unter 768px */
@media (max-width: 768px) {
  .hidden {
    display: none;
  }
}

/* Responsive Größe für größere Bildschirme */
@media (min-width: 768px) {
  .w-6,
  .h-6 {
    width: 1.5rem;
    height: 1.5rem;
  }

  .w-8,
  .h-8 {
    width: 2rem;
    height: 2rem;
  }
}
</style>
