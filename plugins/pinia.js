import { createPinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia); // Pinia wird der Vue-Anwendung hinzugefügt
});
