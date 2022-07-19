<template>
  <h1>Product Page</h1>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route.params.id;
    },
  },
  watch: {
    route: {
      handler(value) {
        console.log(value);
      },
      immediate: true,
    },
  },
};
</script>
