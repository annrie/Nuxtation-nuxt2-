<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  // data: () => ({
  //   loading: false
  // }),
  // Same as:
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

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  background: rgba(255 255 255 / 80%);
}
</style>
