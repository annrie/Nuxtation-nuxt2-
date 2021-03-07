<template>
  <div v-if="loading" class="loading-page">
    <p>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true" />
      <span class="sr-only">Loading...</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  // @include absolute-center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 5rem;
  z-index: 50;
  & i.fa {
    color: $grey-dark;
  }
}
</style>
