<template>
  <div class="grid-x grid-margin-x article-card">
    <div class="cell small-12 large-6">
      <NuxtLink :to="`/blog/author/${author.name}`">
        <img :src="author.img" />
      </NuxtLink>
    </div>
    <div class="cell small-12 large-6">
      <NuxtLink :to="`/blog/author/${author.name}`">
        <h4>Author</h4>
        <p>{{ author.name }}</p>
        <p>{{ author.bio }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  height: 12rem;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>
