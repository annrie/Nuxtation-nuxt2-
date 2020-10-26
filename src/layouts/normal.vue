<template>
  <div id="app">
    <nav
      id="skip-links"
      class="skip-links"
      aria-label="Skip links"
      data-smooth-scroll
    >
      <a class="screen-reader-text" href="#main">Skip to content</a>
      <a class="screen-reader-text" href="#menu">Skip to navigation</a>
    </nav>
    <off-canvas />
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="grid-container full" data-sticky-container>
        <main-nav />
      </div>
      <div class="main-container">
        <div class="main-grid">
          <main id="main" class="main-content-full-width">
            <transition name="fade-up">
              <nuxt />
            </transition>
          </main>
        </div>
      </div>
      <div id="top" />
      <div id="content-top" />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Footer from "./TheFooter";
// import OffCanvas from "@/components/TheOffCanvas";
// import MainNav from "@/components/TheMainNav";

export default {
  components: {

  },
  mounted() {
   $(document).foundation();
    // this.sticky = new Foundation.Sticky($('#mainNav'));
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  // top: 80rem;
  height: auto;
  padding-top: 0;
}
</style>
