<template>
  <div class="container">
    <div>
      <app-logo />
      <h2 class="title">Nuxtation</h2>
      <h3 class="subtitle">Foundation-Nuxt demo</h3>
      <div class="links">
        <a href="https://nuxtjs.org" rel="noopener noreferrer" class="hollow button radius">
          <i class="fa fa-file-code-o fa-lg" />
          Nuxt Document
        </a>
        <a
          href="https://get.foundation/sites/docs/"
          rel="noopener noreferrer"
          class="hollow button secondary radius"
        >
          <i class="fa fa-file-text-o fa-lg" />
          Foundation Document
        </a>
        <a
          href="https://github.com/annrie/Nuxtation"
          rel="noopener noreferrer"
          class="hollow button success radius"
        >
          <i class="fa fa-github fa-lg" />
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  name: "TopPage",
  mixins: [Meta],
  head() {
    return {
      title: process.env.siteName,
      titleTemplate: false,
    };
  },
};
</script>

<style lang="scss">
.container {
  text-align: center;
}
.title {
  display: block;
  @include welcome;

  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
  @include breakpoint(small) {
    font-size: 60px;
  }
  @include breakpoint(medium) {
    font-size: 90px;
  }
  @include breakpoint(tablet) {
    font-size: 96px;
  }
  @include breakpoint(large) {
    font-size: 100px;
  }
}
.subtitle {
  padding-bottom: 15px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  @include breakpoint(small) {
    font-size: 20px;
  }
  @include breakpoint(medium) {
    font-size: 36px;
  }
  @include breakpoint(large) {
    font-size: 42px;
  }
}
.links {
  padding-top: 15px;
}
</style>
