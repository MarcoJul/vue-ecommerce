<template>
   <div :style="style" class="hero-box">
      <h2 class="collection-title">{{ title }}</h2>
      <div class="filter-box">
         <div
            v-if="hasFilters"
            class="filter-button"
            :class="activeFilter === 'All' ? 'active' : ''"
            @click="selectFilter('All')"
         >
            <p class="filter-text">All</p>
         </div>
         <div
            v-if="hasFilters"
            v-for="filter in filters"
            class="filter-button"
            @click="selectFilter(filter)"
            :class="activeFilter === filter ? 'active' : ''"
         >
            <p class="filter-text">{{ filter }}</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["image", "title", "filters"],
   data() {
      return {
         activeFilter: "All",
      };
   },
   computed: {
      style() {
         return {
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "75% 85%",
         };
      },
      hasFilters() {
         return this.filters.length > 1;
      },
   },

   //// CONTROLLARE PER RESET FILTRO SU ALL
   watch: {
      title() {
         this.activeFilter = "All";
      },
   },
   ///////
   methods: {
      selectFilter(name) {
         this.activeFilter = name;
      },
   },
};
</script>

<style scoped>
.collection-title {
   width: 50rem;
   text-shadow: 2px 2px 0px #000000;
}

.filter-box {
   display: flex;
   gap: 0.9rem;
   position: absolute;
   bottom: 15%;
   right: 50%;
   transform: translateX(50%);
}
.filter-button {
   background-color: white;
   width: 8.5rem;
   height: 3.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
   cursor: pointer;
}
.filter-text {
   font-size: 1.4rem;
   text-transform: uppercase;
   font-family: "Satoshi", sans-serif;
   font-weight: 500;
}
.filter-button:hover,
.active {
   background-color: #000000;
   color: #fff;
   box-shadow: 2px 2px 0px #ffffff;
}
</style>
