<template>
  <div class="expanded button-group align-center">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden text-inline">First</span>
      <SingleBack />
    </div>

    <nuxt-link v-else :to="{ name: 'blog-page-page', params: { page: 1 } }" :class="buttonStyles">
      <DoubleBack />
      <span class="hidden text-inline">First</span>
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden text-inline">Prev</span>
      <SingleBack />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      <SingleBack />
      <span class="hidden text-inline">Prev</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden text-inline">Next</span>
      <SingleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
      <span class="hidden text-inline">Next</span>
      <SingleFwd />
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden text-inline">Last</span>
      <DoubleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <span class="hidden text-inline">Last</span>
      <DoubleFwd />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return "button arrow text-uppercase";
    },
    disabledStyle() {
      return "button arrow disabled";
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPages;
    },
  },
};
</script>
