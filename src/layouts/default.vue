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
    <OffCanvas />
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="grid-y grid-frame">
        <div class="cell">
          <div class="grid-container full" data-sticky-container>
            <MainNav />
          </div>
        </div>
        <div class="cell auto skip">
          <div class="grid-x">
            <div class="cell medium-cell-block-y">
              <div class="main-container">
                <div class="main-grid">
                  <main id="main" class="main-content-full-width">
                    <transition name="fade-up">
                      <nuxt />
                    </transition>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell shrink">
          <div id="top" />
          <div id="content-top" />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Footer from "./TheFooter";
import OffCanvas from "@/components/TheOffCanvas";
import MainNav from "@/components/TheMainNav";

export default {
  components: {
    OffCanvas,
    MainNav,
    Footer,
  },
  mounted() {
    this.smoothScroll = new Foundation.SmoothScroll($("#app"));
  },
  destroyed() {
    this.smoothScroll.destroy();
  },
};
</script>
<style lang="scss">
.skip {
  overflow: auto;
}
main {
  height: 100vh;
  margin-top: 3rem;
}
</style>
