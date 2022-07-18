<template>
   <h1>The Collection Page</h1>
   <div class="collections-box"></div>
</template>

<script>
export default {
   data() {
      return {
         collections: [],
      };
   },
   methods: {
      loadCollections() {
         fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json")
            .then((response) => {
               if (response.ok) {
                  return response.json();
               }
            })
            .then((data) => {
               const collections = data.collection_listings;
               const results = [];
               for (const collection_id in collections) {
                  results.push({
                     id: collections[collection_id].collection_id,
                     handle: collections[collection_id].handle,
                     title: collections[collection_id].title,
                     image: collections[collection_id].default_product_image.src,
                  });
               }
               this.collections = results;
               console.log(results);
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
   mounted() {
      this.loadCollections();
   },
};
</script>

<style>
.collections-box {
   display: flex;
   width: 100vw;
   align-items: center;
   justify-content: center;
}
</style>
