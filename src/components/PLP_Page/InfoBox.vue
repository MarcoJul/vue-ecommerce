<template>
   <div class="info-box">
      <div class="info-content">
         <p class="info-item">{{ products.length }} items</p>
         <p class="info-item">Sort by: NEWEST</p>
      </div>
   </div>
</template>

<script>
export default {
   props: ["products"],
};
</script>

<style>
.info-box {
   height: 4.7rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #000;
}
.info-content {
   width: 100%;
   max-width: 120rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 auto;
   font-family: "Satoshi", sans-serif;
}

.info-item {
   color: #000;
   font-size: 1.4rem;
}
</style>
