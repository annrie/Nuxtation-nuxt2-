<template>
  <header class="grid-x grid-margin-x">
    <NuxtLink to="/blog" class="hide-for-large">
      <img class="bloglogo margin-left-3" src="/logo.png" alt="blog logo" />
    </NuxtLink>
    <AppSearchInput class="block margin-left-3" />
  </header>
</template>

<style>
.bloglogo {
  width: 60px;
  display: inline-block;
}
</style>
