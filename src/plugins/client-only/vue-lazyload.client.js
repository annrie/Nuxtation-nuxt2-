import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.1,
  attempt: 1,
  observer: true,

  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1,
  },
  // filter: {
  //   webp(listener) {
  //     if (!options.supportWebp) return
  //     listener.src = 'hoge.webp'
  //     // listener.src += '?fm=webp' //contentful等パスにパラメータを渡せる場合
  //   },
  // },
});
