<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-black text-white"
  >
    <!-- Hintergrundbild -->
    <NuxtImg
      src="/images/hero-image-cropped-edit.jpg"
      alt="Mika the tattoo artist"
      class="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <!-- Inhalt -->
    <div class="relative z-10 text-center max-w-xl px-6 sm:px-8 md:px-12">
      <!-- Logo -->
      <img
        class="animate-fade-in mx-auto"
        src="/logo/mkc-tattooart.svg"
        alt="MKC Tattoo Art Logo"
      />

      <div class="mt-6">
        <a
          href="#BookingForm"
          class="btn btn-custom inline-block px-4 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 font-medium bg-orange-600 hover:bg-orange-500 rounded-sm shadow-md transition-all transform hover:scale-105"
        >
          Book now
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import "assets/css/main.scss";
</script>

<!-- printify token eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI1ZGFkYjBhNjI5Zjg4MjY3YTY1Mzg0YzY1OTkwNDJjNjBlOTRjMzI5ZTEyMDhmNjZlYTdjNWYyZjU5ODBhYjYxNmZkOWExMTQ5M2YwNzNhIiwiaWF0IjoxNzQzNDU3NDAwLjI5NTkzNiwibmJmIjoxNzQzNDU3NDAwLjI5NTkzOSwiZXhwIjoxNzc0OTkzNDAwLjI4ODU3LCJzdWIiOiIxMjE2Nzc0MCIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiLCJ1c2VyLmluZm8iXX0.AkN5nmIoyscjvniQsDu--pjT4NGoCC5sgGagdlAMVkELe4zugDo-Kn4mvQ2WxEsjDrr1_ubxnUmF89qjHy0

 -->
