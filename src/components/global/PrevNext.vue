<template>
  <div class="grid-x grid-margin-x margin-bottom-2">
    <div class="cell small-6 text-left">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="font-bold prev"
      >
        <span class="icon icon-left" />
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="cell small-6 text-right">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold next"
      >
        {{ next.title }}
        <span class="icon icon-right" />
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
a.prev {
  margin-left: 30px;
  &:hover {
    color: invert(#406485);
  }
}
a.next {
  margin-right: 30px;
  &:hover {
    color: invert(#406485);
  }
}
</style>
