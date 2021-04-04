<template>
  <article class="grid-x grid-margin-x">
    <div class="cell small-12 large-6 hero">
      <div class="first">
        <img :src="article.img" :alt="article.alt" class="article-img" />
      </div>
      <div class="grid-x grid-margin-x included-1">
        <div class="cell">
          <div class="grid-x grid-margin-x align-spaced">
            <div class="cell small-2 hide-for-large">
              <NuxtLink to="/blog">
                <img class="bloglogo" src="/logo.png" alt="blog logo" />
              </NuxtLink>
            </div>
            <div class="cell small-8">
              <div class="grid-x grid-margin-x">
                <div class="cell small-3 bottom">
                  <NuxtLink to="/blog" class="t-shadow"> All articles </NuxtLink>
                </div>
                <div class="cell small-3 bottom">
                  <a
                    href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
                    class="t-shadow"
                  >
                    Tutorial
                  </a>
                </div>
                <div class="cell small-6">
                  <AppSearchInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-x grid-margin-x align-left-middle included-2">
        <div class="cell shrink">
          <p class="t-shadow">
            {{ formatDate(article.updatedAt) }}
          </p>
        </div>
        <div class="cell shrink">
          <span class="t-shadow">•</span>
        </div>
        <div class="cell shrink t-shadow">
          <p>{{ article.author.name }}</p>
        </div>
        <div class="cell">
          <h1 class="font-bold t-shadow">
            {{ article.title }}
          </h1>
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
              <span class="hollow button tab font-bold text-uppercase text-truncate t-shadow">
                {{ tags[tag].name }}
              </span>
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-6 second" data-aos="fade-up">
      <h1>
        {{ article.title }}
      </h1>
      <p>{{ article.description }}</p>
      <p class="">Post last updated: {{ formatDate(article.updatedAt) }}</p>
      <!-- table of contents -->
      <nav class="pb-6">
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <nuxtLink :to="`#${link.id}`" class="">
              {{ link.text }}
            </nuxtLink>
          </li>
        </ul>
      </nav>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author :author="article.author" />
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="margin-top-2" />
    </div>
  </article>
</template>

<script>
import global from "../../../utils/global";
import getSiteMeta from "../../../utils/getSiteMeta";
// const meta = getSiteMeta();

export default {
  layout: "noFooter",
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })));
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      tags,
      prev,
      next,
    };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: global.author || "" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      };
      return getSiteMeta(metaData);
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
