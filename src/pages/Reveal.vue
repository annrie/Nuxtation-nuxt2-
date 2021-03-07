<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <div id="reveal-dialog" class="reveal" data-reveal>
          <h1>Awesome. I Have It.</h1>
          <p class="lead">Your couch. It is mine.</p>
          <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
          <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p><a @click="openReveal()">Click me for a modal</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "Reveal",
  mixins: [Meta],
  data() {
    return {
      msg: "Reveal",
      meta: {
        title: "Reveal",
        type: "article",
      },
    };
  },
  mounted() {
    this.reveal = new Foundation.Reveal($("#reveal-dialog"), {
      // These options can be declarative using the data attributes
      animationIn: "spin-in",
      animationOut: "spin-out",
    });
  },
  methods: {
    // Added the below openReveal method for two reasons:
    // 1) There was a bug preventing the reveal from working once
    // you navigated away and back to the reveal component.
    // 2) Most dialogs will need to be opened using code.
    openReveal() {
      this.reveal.open();
    },
  },
};
</script>

<style lang="scss" scoped>
.close-button {
  z-index: 20;
  color: $black;
  &:hover {
    color: scale-color($primary-color, $lightness: -20%);
  }
}
</style>
