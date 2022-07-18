<template>
   <div class="hero-box">
      <div v-if="noCollection" class="error-message"><h2>No Collection Found!</h2></div>
      <Hero v-else :image="collectionImage" :title="collectionTitle" :filters="collectionFilters" />
      <InfoBox :products="productList" />
   </div>
</template>

<script>
import Hero from "./Hero.vue";
import InfoBox from "./InfoBox.vue";
export default {
   components: { Hero, InfoBox },
   data() {
      return {
         collection: {},
         products: [],
         noProduct: false,
         noCollection: false,
         productIsLoading: false,
      };
   },
   computed: {
      route() {
         return this.$route.params.collectionName;
      },
      collectionImage() {
         if (this.collection.default_product_image) {
            return this.collection.default_product_image.src;
         } else {
            return "";
         }
      },
      collectionTitle() {
         return this.collection.title;
      },
      collectionId() {
         return this.collection.collection_id;
      },
      collectionFilters() {
         return this.products.reduce((result, curr) => {
            if (!result.includes(curr.product_type)) result.push(curr.product_type);
            return result;
         }, []);
      },
      productList() {
         return this.products;
      },
   },
   watch: {
      route: {
         handler(value) {
            if (!value) return;
            this.getCollection(value);
         },
         immediate: true,
      },
      async collectionId(value) {
         if (!value) {
            this.noProduct = true;
            return;
         }
         this.productIsLoading = true;
         const response = await fetch(
            `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${value}/products.json`
         );
         const data = await response.json();
         console.log("products", data);
         this.products = data.products;
         this.productIsLoading = false;
      },
   },
   methods: {
      async getCollection(route) {
         if (!route) return;
         try {
            const response = await fetch(
               "https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json"
            );
            const data = await response.json();

            console.log("collections", data);

            this.collection = data.collection_listings.find((collection) => collection.handle === this.route);
            console.log("collezione", this.collection);
         } catch (err) {
            this.noCollection = true;
         }
      },
   },
};
</script>

<style>
.hero-box {
   background-color: rgb(88, 43, 43);
   position: relative;
   height: 35rem;
}
.error-message {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.error-message h2 {
   font-family: "Satoshi", sans-serif;
   text-transform: uppercase;
   color: #fff;
   font-size: 2.5rem;
}
</style>
