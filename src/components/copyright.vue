<template>
  <p>Copyright &copy;2020 - {{ year }} nuxtation project.</p>
</template>

<script>
const now = new Date();
const year = now.getFullYear();

export default {
  data() {
    return {
      year,
    };
  },
};
</script>
