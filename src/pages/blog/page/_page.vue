<template>
  <div class="grid-x grid-margin-x">
    <div class="cell small-12 large-expand margin-top-0">
      <TheHeader />
      <h1 class="font-bold margin-top-2 margin-left-1">Blog Posts ({{ allArticles.length }})</h1>
      <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
      <TagList :tags="allTags" />
    </div>
  </div>
</template>

<script>
import getContent from "../../../../utils/getContent";
import Meta from "~/assets/mixins/meta";

export default {
  mixins: [Meta],
  layout: "blog",
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
      allTags: content.allTags,
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
  head() {
    return {
      title: `Blog Page ${this.$route.params.page}`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`,
        },
      ],
    };
  },
};
</script>
