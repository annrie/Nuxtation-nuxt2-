<template>
  <div class="container">
    <div>
      <app-logo />
      <h2 class="title">
        Nuxtation
      </h2>
      <h3 class="subtitle">
        Foundation-Nuxt demo
      </h3>
      <div class="links">
        <a
          href="https://ja.nuxtjs.org"
          rel="noopener noreferrer"
          class="hollow button radius"
        >
          <fa :icon="fas.faFileCode" />
          Nuxt Document (jp)
        </a>
        <a
          href="https://get.foundation/sites/docs/"
          rel="noopener noreferrer"
          class="hollow button secondary radius"
        >
          <fa :icon="fas.faFileCode" />
          Foundation Document
        </a>
        <a
          href="https://github.com/annrie/Nuxtation"
          rel="noopener noreferrer"
          class="hollow button success radius"
        >
          <fa :icon="fab.faGithub" />
          GitHub
        </a>
      </div>
      <div>
        <div>{{ $mq }} Size</div>
        <div v-if="small">
          small Size
        </div>
        <div v-else-if="medium">
          medium Size
        </div>
        <div v-else-if="tablet">
          tablet Size
        </div>
        <div v-else-if="largePlus">
          desktop+ Size
        </div>
        <div v-else-if="large">
          desktop Size
        </div>
        <div v-else-if="xlarge">
          desktop+ Size
        </div>
        <div v-else>
          desktop+ Size
        </div>
        <client-only>
          <div>window width: {{ $window.width }} px</div>
          <div>window height: {{ $window.height }} px</div>
          <div>amount of scrolling: {{ $window.pageYOffset }} px</div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { fas, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons'
import Meta from '~/assets/mixins/meta'

export default {
  mixins: [Meta],
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    },
    faGithub() {
      return faGithub
    },
    faFileCode() {
      return faFileCode
    },
  },
  watch: {
    '$window.width'() {
      console.log(`width: ${this.$window.width}`)
    },
    '$window.height'() {
      console.log(`height: ${this.$window.height}`)
    },
    '$window.pageYOffset'() {
      console.log(`pageYOffset: ${this.$window.pageYOffset}`)
    },
  },
  head() {
    return {
      title: process.env.siteName,
      titleTemplate: false,
    }
  },
}
</script>

<style lang="scss">
.container {
  text-align: center;
}
.title {
  display: block;
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
