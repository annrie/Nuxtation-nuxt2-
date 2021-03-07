<template>
  <div class="grid-x grid-margin-x">
    <div class="cell small-12 large-expand margin-top-0">
      <TheHeader />
      <h1 class="font-bold margin-top-2 margin-left-1">Blog Posts</h1>
      <div id="test-eq" class="grid-x grid-padding-x small-up-1 tablet-up-2">
        <div v-for="article of articles" :key="article.slug" class="cell">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="transition ease-in-out"
          >
            <div class="grid-x grid-padding-x margin-bottom-1">
              <div class="cell small-12 small-centered xsmall-centerd large-6 text-center parent">
                <div class="thumbnail">
                  <img v-if="article.img" class="articleSize" :src="article.img" />
                </div>
              </div>

              <div class="cell small-12 small-centered xsmall-centerd large-6">
                <h2 class="font-bold">
                  {{ article.title }}
                </h2>
                <p>by {{ article.author.name }}</p>
                <p>
                  {{ article.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="cell small-12">
        <h3 class="text-center">Topics</h3>
        <ul class="menu grid-x grid-padding-x">
          <li v-for="tag of tags" :key="tag.slug" class="text-center cell small-4">
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
              <p class="font-bold">
                {{ tag.name }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from "~/assets/mixins/meta";

export default {
  mixins: [Meta],
  layout: "blog",
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tags,
    };
  },
  data() {
    return {
      meta: {
        title: "Blog",
        type: "article",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.25rem;
  font-weight: bold;
}
h2 {
  font-size: $h5-font-size;
}
.articleSize {
  display: block;
  object-fit: cover;
  width: 25rem;
  max-width: 100%;
  height: 12rem;
}
</style>
