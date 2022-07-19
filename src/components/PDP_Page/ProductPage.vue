<template>
  <div class="product-container" v-if="!isLoading">
    <div class="image-container">
      <img :src="product.image?.src" :alt="product.title" />
    </div>
    <div class="product-info-container">
      <div class="breadcrumb">
        {{ normalizeName(collectionName) }} /
        {{ product.product_type === "" ? "All" : product.product_type }}
      </div>
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-description">
        {{ product.body_html?.replace(/<[^>]*>?/gm, "") }}
      </p>
      <p class="vendor">{{ product.vendor }}</p>
      <div class="prices-section">
        <p class="original-price">{{ price }} €</p>
        <p>{{ (price - price * 0.2).toFixed(2) }} €</p>
      </div>
      <button>Add to Cart</button>
      <ul class="tags-box">
        <li v-for="tag in product.tags?.split(',')" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  computed: {
    route() {
      return this.$route.params.id;
    },
    collectionName() {
      return this.$route.params.collectionName;
    },
    price() {
      if (this.product.variants) {
        return this.product.variants[0].price;
      }
    },
  },
  watch: {
    route: {
      handler(value) {
        this.getProduct(value);
      },
      immediate: true,
    },
  },
  methods: {
    async getProduct(productId) {
      this.isLoading = true;
      if (!productId) return;
      try {
        const response = await fetch(
          `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${productId}.json`
        );
        const data = await response.json();
        this.product = data.product;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
    normalizeName(text) {
      const modified = text.split("-").reduce((string, curr) => {
        const piece = curr.charAt(0).toUpperCase() + curr.slice(1) + "";
        return `${string} ${piece}`;
      }, "");
      return modified.trim();
    },
  },
};
</script>

<style scoped>
.product-container {
  font-family: "Satoshi", sans-serif;
  display: flex;
  margin: 1.6rem auto;
  max-width: 120rem;
  font-weight: 500;
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
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin-top: 10rem;
}

.breadcrumb {
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
}

.product-title {
  font-family: "Stardom", serif;
  font-size: 3.2rem;
  line-height: 200%;
  margin-bottom: 2rem;
}
.product-description {
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  font-weight: 400;
  max-width: 45rem;
  text-align: center;
}
.vendor {
  margin-bottom: 1.6rem;
  font-size: 1.2rem;
}
.prices-section {
  display: flex;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  gap: 0.8rem;
}

.original-price {
  text-decoration: line-through;
  font-weight: 300;
}
.product-container button {
  font-family: inherit;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  padding: 1.3rem 7.3rem;
  border-radius: 100px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.4s;
  margin-bottom: 11rem;
}

.product-container button:hover {
  background-color: #fff;
  color: #000;
}
.tags-box {
  display: flex;
  gap: 0.8rem;
}
.tag {
  list-style-type: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  border: 1px solid #000;
  border-radius: 100px;
}
</style>
