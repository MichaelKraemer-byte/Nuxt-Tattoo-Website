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
  // Performance-Optimierungen
  ssr: true, // ⇦ SSR aktiviert für bessere Performance
  nitro: {
    preset: "node", // ⇦ Node.js preset für bessere Performance
    compressPublicAssets: true,
    minify: true,
  },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router"],
            ui: ["@nuxt/ui"],
          },
        },
        external: ["lightningcss", "@tailwindcss/oxide"], // Exclude native modules
      },
    },
    optimizeDeps: {
      include: ["vue", "vue-router", "@nuxt/ui"],
    },
  },
  // i18n Konfiguration
  runtimeConfig: {
    public: {
      defaultLocale: "de",
      locales: ["de", "en"],
    },
  },
  build: {
    transpile: ["lightningcss", "@tailwindcss/oxide"],
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
        quality: 80,
        format: ["webp", "avif", "jpg"],
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
        },
      },
    ],
  ],
  css: ["@/assets/css/tailwind.css"],
  plugins: [
    "~/plugins/pinia.js",
    "~/plugins/aos.client.js",
    "~/plugins/performance.client.js",
  ],
});
