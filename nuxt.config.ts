import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // runtimeConfig: {
  //   public: {},
  //   GMAIL_USER: undefined,
  //   GMAIL_PASS: undefined,
  // },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "nuxt-tailwindcss4",
  ],
  css: ["@/assets/css/tailwind.css"],
  plugins: ["~/plugins/pinia.js", "~/plugins/aos.client.js"],
});
