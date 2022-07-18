<template>
   <div class="collections-box">
      <collection-item
         v-for="collection in collections"
         :id="collection.id"
         :key="collection.id"
         :handle="collection.handle"
         :image="collection.image"
         :title="collection.title"
      >
      </collection-item>
   </div>
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

<style>
.collections-box {
   display: flex;
   width: 100vw;
   align-items: center;
   justify-content: center;
}
</style>
