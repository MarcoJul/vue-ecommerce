<template>
  <h1>{{ product.title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  computed: {
    route() {
      return this.$route.params.id;
    },
  },
  watch: {
    route: {
      handler(value) {
        console.log(value);
        this.getProduct(value);
      },
      immediate: true,
    },
  },
  methods: {
    async getProduct(productId) {
      if (!productId) return;
      try {
        const response = await fetch(
          `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${productId}.json`
        );
        const data = await response.json();
        this.product = data.product;
        console.log("product", this.product);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
