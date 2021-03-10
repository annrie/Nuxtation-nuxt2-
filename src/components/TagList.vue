<template>
  <div class="cell small-12">
    <h3 class="text-center">Categories</h3>
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
</template>
<script>
export default {
  name: "TagList",
  props: {
    tags: {
      type: Array,
      default: Array,
    },
  },
};
</script>
