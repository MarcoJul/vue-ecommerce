<template>
   <div class="product-list">
      <ul class="product-item" v-for="product in products">
         <li :key="product.id" class="card">
            <router-link :to="`/collections/${collectionName}/${product.id}`">
               <div class="image-box">
                  <img :src="product.image.src" alt="" />
               </div>
               <div class="product-info-box">
                  <p class="vendor">{{ product.vendor }}</p>
                  <h2 class="product-title">{{ product.title }}</h2>
                  <div class="prices">
                     <p class="original-price">80.00 €</p>
                     <p class="final-Price">69,90 €</p>
                  </div>
               </div>
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   props: ["products", "collectionName"],
   methods: {},
};
</script>

<style>
.product-list {
   display: flex;
   flex-wrap: wrap;
   gap: 1.6rem;
   max-width: 120rem;
   margin: 1.5rem auto 0;
}

.card {
   max-width: 28.8rem;
   list-style-type: none;
   cursor: pointer;
}

.product-title {
   color: #000;
   font-size: 2rem;
}
.image-box {
   width: 28.8rem;
   height: 23.1rem;
   overflow: hidden;
}

.image-box img {
   height: 100%;
}

.product-info-box {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.vendor {
   font-size: 1rem;
   font-weight: 500;
   text-transform: uppercase;
   margin-top: 0.8rem;
}
</style>
