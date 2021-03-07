<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-3">
        <div
          id="magellan"
          class="sticky hide-for-small-only"
          data-sticky
          data-anchor="main"
          data-margin-top="10"
        >
          <div class="grid-x">
            <div class="cell">
              <h1>{{ msg }}</h1>
            </div>
            <div class="cell">
              <ul class="vertical menu" data-magellan>
                <li><a href="#first">First Section</a></li>
                <li><a href="#second">Second Section</a></li>
                <li><a href="#third">Third Section</a></li>
                <client-only>
                  <li class="menu-text">window width: {{ $window.width }} px</li>
                  <li class="menu-text">window height: {{ $window.height }} px</li>
                  <li class="menu-text">amount of scrolling: {{ $window.pageYOffset }} px</li>
                </client-only>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cell small-12 medium-9">
        <h2 class="show-for-small-only">Magellan</h2>
        <div class="sections">
          <section id="first" data-magellan-target="first">
            <span>First Section</span>
          </section>
          <section id="second" data-magellan-target="second">
            <span>Second Section</span>
          </section>
          <section id="third" data-magellan-target="third">
            <span>Third Section</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Magellan",
  mixins: [Meta],
  layout: "normal",
  data() {
    return {
      msg: "Magellan",
      meta: {
        title: "Magellan",
        type: "article",
      },
    };
  },
  watch: {
    "$window.width"() {
      console.log(`width: ${this.$window.width}`);
    },
    "$window.height"() {
      console.log(`height: ${this.$window.height}`);
    },
    "$window.pageYOffset"() {
      console.log(`pageYOffset: ${this.$window.pageYOffset}`);
    },
  },
  mounted() {
    this.sticky = new Foundation.Sticky($("#magellan"));
    this.magellan = new Foundation.Magellan($("#magellan"), {
      // These options can be declarative using the data attributes
      animationEasing: "swing",
    });
  },
};
</script>

<style lang="scss" scoped>
main {
  .is-active {
    color: $white;
    background-color: $primary-color;
  }
  .sections {
    @include breakpoint(small) {
      margin-bottom: 50px;
    }
    @include breakpoint(medium) {
      margin-bottom: 400px;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 600px;
      margin: 1rem;
      background: $light-gray;
      span {
        font-size: 2rem;
        font-weight: lighter;
      }
    }
  }
  .menu-text {
    font-size: smaller;
    font-weight: lighter;
  }
}
</style>
