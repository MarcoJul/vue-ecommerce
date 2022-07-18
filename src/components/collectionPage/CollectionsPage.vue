<template>
   <h1>The Collection Page</h1>
</template>

<script>
import CollectionItem from "./CollectionItem.vue";
export default {
   components: { CollectionItem },
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
