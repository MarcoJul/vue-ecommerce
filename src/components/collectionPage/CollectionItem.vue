<template>
   <div class="collection-box">
      <router-link :to="`/collections/${handle}`">
         <img class="collection-image" :src="image" :alt="handle" />
         <div class="filter"></div>
         <h2 class="collection-title">{{ title.replace("and", "&") }}</h2>
      </router-link>
   </div>
</template>

<script>
export default {
   props: ["id", "handle", "title", "image"],
   data() {
      return {};
   },
   methods: {},
};
</script>

<style>
.collection-box {
   flex-grow: 3;
   overflow: hidden;
   position: relative;
   cursor: pointer;
   height: 85rem;
}

.collection-image {
   transform: translateX(-30%);
   height: 85rem;
}
.filter {
   background-color: rgba(0, 0, 0, 0.6);
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
}

.collection-title {
   font-family: "Stardom", sans-serif;
   font-size: 3.2rem;
   font-weight: 400;
   color: #fff;
   text-align: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 5;
   width: 15rem;
}
</style>
