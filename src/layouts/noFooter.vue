<template>
  <div id="app">
    <!--firstLoading /-->
    <nav id="skip-links" class="skip-links" aria-label="Skip links" data-smooth-scroll>
      <a class="screen-reader-text" href="#main">Skip to content</a>
      <a class="screen-reader-text" href="#menu">Skip to navigation</a>
    </nav>
    <off-canvas />
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="grid-container full" data-sticky-container>
        <main-nav />
      </div>
      <div class="main-container full">
        <div class="main-grid">
          <main class="main-content-full-width blog" role="main" tabindex="-1">
            <transition name="fade-up">
              <nuxt />
            </transition>
          </main>
        </div>
      </div>
      <div id="top" />
      <div id="content-top" />
    </div>
    <div class="back-to-top-sticky hide-for-print" data-sticky-container>
      <client-only>
        <aside class="back_to_top">
          <nuxt-link v-scroll-to="'#top'" to="">
            <i class="fa fa-arrow-circle-o-up fa-3x" aria-hidden="true" />
            <span class="show-for-sr">トップへ戻る</span>
          </nuxt-link>
        </aside>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).foundation();
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  height: auto;
  padding-top: 0;
}
</style>
