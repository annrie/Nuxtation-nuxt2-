<template>
  <article class="grid-x grid-margin-x">
    <div class="cell small-12 large-6 hero">
      <div class="first">
        <img :src="articles[0].author.img" :alt="articles[0].author.name" class="article-img" />
      </div>
      <div class="grid-x grid-margin-x included-1">
        <div class="cell hide-for-large">
          <NuxtLink to="/blog">
            <img class="bloglogo" src="/logo.png" alt="blog logo" />
          </NuxtLink>
        </div>
        <div class="cell margin-top-3">
          <h1 class="font-bold">
            {{ articles[0].author.name }}
          </h1>
          <p class="margin-bottom-2">
            {{ articles[0].author.bio }}
          </p>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-6 second" data-aos="fade-up">
      <NuxtLink to="/blog">
        <p class="margin-left-1">Back to All Articles</p>
      </NuxtLink>
      <h2 class="margin-bottom-2 margin-left-1 font-bold">
        Here are a list of articles by {{ articles[0].author.name }}:
      </h2>
      <div
        v-for="article in articles"
        :key="article.slug"
        class="grid-x grid-margin-x article-card"
      >
        <div class="cell small-12 large-6">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img v-if="article.img" class="content-img" :src="article.img" :alt="article.alt" />
          </NuxtLink>
        </div>
        <div class="cell small-12 large-6">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <h3 class="font-bold">
              {{ article.title }}
            </h3>
            <p>{{ article.description }}</p>
            <p class="font-bold text-gray-600">
              {{ formatDate(article.updatedAt) }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  layout: "noFooter",
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .where({
        "author.name": {
          $regex: [params.author, "i"],
        },
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
  head() {
    return {
      title: `Articles Author - ${this.captialise(this.$route.params.author)}`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/author/${this.$route.params.author}`,
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    captialise(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
};
</script>
