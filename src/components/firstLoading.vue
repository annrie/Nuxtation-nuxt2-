<template>
  <div class="loading" :class="{ 'is-finish': dataLoadFinish }">
    <p>loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataLoadFinish: false,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.dataLoadFinish = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: rem-calc(52);
  color: $white;
  background: $primary-color;
  &.is-finish {
    z-index: -1;
    opacity: 0;
    transition: opacity 1s, z-index 0s 1.01s;
  }
}
</style>
