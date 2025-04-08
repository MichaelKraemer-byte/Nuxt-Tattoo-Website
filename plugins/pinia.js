// plugins/pinia.ts
import { createPinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia); // Pinia in die Vue-Anwendung integrieren
});
