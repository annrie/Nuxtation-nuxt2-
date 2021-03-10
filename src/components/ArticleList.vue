<template>
  <div>
    <div class="grid-x grid-padding-x small-up-1 tablet-up-2">
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
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>by {{ article.author.name }}</p>
              <p>
                {{ article.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-if="total" class="container mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 5" :total="total" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>
