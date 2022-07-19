<template>
  <div class="product-container">
    <div class="image-container">
      <img :src="product.image?.src" :alt="product.title" />
    </div>
    <div class="product-info-container">
      <div class="breadcrumb">
        {{ normalizeName(collectionName) }}/{{
          product.product_type === "" ? "All" : product.product_type
        }}
      </div>
      <h2>{{ product.title }}</h2>
    </div>
  </div>
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
    collectionName() {
      return this.$route.params.collectionName;
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
        console.log("route product", this.$route.params);
      } catch (err) {
        console.log(err);
      }
    },
    normalizeName(text) {
      console.log(text.split("-"));
      const modified = text.split("-").reduce((string, curr) => {
        const piece = curr.charAt(0).toUpperCase() + curr.slice(1) + "";
        return `${string} ${piece}`;
      }, "");
      return modified.trim();
    },
  },
};
</script>

<style>
.product-container {
  display: flex;
  margin: 1.6rem auto;
  max-width: 120rem;
}

.image-container {
  width: 50%;
  overflow: hidden;
}

.image-container img {
  width: 150%;
  transform: translateX(-18%);
}

.product-info-container {
  display: flex;
  flex-direction: column;
}
</style>
