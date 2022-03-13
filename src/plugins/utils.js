import Vue from "vue";

Vue.prototype.$getCurrentScreenSize = () => {
  window.addEventListener("resize", () => {
    console.log("Current screen size: " + Foundation.MediaQuery.current);
  });
  window.addEventListener("resize", () => {
    console.log("Current screen width: " + document.documentElement.clientWidth);
  });
  window.addEventListener("resize", () => {
    console.log("Current screen height: " + global.innerHeight);
  });
  window.addEventListener("scroll", () => {
    console.log("Current scroll size: " + global.scrollY);
  });
};
