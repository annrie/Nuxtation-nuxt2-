import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  // ↓以下オプション Doc: https://vue-scrollto.netlify.com/
  duration: 1000,
  easing: [0, 0, 0.1, 1],
  offset: -150,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
