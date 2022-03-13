<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
/**
 * app.vueファイルは、Nuxt3アプリケーションの主要コンポーネントです。
 * Nuxt 3では、pages/ディレクトリはオプションです。
 * 存在しない場合、Nuxtにはvue-routerの依存関係が含まれません。
 * これは、ルーティングを必要としないランディングページまたはアプリケーションで作業する場合に役立ちます。
 */

/**
 * メタタグ
 * 設定方法は3つ
 * 1. setup()でuseMeta()
 * 2. 従来のoption構文（head コンポーネントプロパティ）
 * 3. メタコンポーネント
 * https://v3.nuxtjs.org/docs/usage/meta-tags
 */
useMeta(() => {
  return {
    title: "Nuxtation(nuxt-bridge)",
  };
});
</script>
