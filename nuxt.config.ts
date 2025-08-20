import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/img/fav-icon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth", // oder 'auto'
    },
  },
  ssr: false, // ⇦ deaktiviert SSR
  nitro: {
    preset: "static", // ⇦ erzeugt reine HTML/JS‑Dateien im build‑Ordner
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    [
      "@nuxt/image",
      {
        provider: "static",
        staticFilename: "[publicPath]/img/[name]-[hash][ext]",
        // hier kannst du weitere image-Optionen hinzufügen
      },
    ],
  ],
  css: ["@/assets/css/tailwind.css"],
  plugins: ["~/plugins/pinia.js", "~/plugins/aos.client.js"],
});
