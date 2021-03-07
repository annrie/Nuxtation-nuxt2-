<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="text-truncate"
    />
    <ul v-if="articles.length" class="">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition ease-in-out"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles").limit(6).search(searchQuery).fetch();
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="search"] {
  border-radius: 0.375rem;
  border-color: rgba(160, 174, 192, 1);
}
</style>
