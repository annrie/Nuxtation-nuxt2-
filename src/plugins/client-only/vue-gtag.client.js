import { defineNuxtPlugin } from "@nuxt/bridge/dist/runtime";
import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "GA_MEASUREMENT_ID",
    },
  });
});

// https://github.com/nuxt/framework/discussions/1175
// https://v3.nuxtjs.org/docs/directory-structure/plugins#vue-plugins
