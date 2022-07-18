import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import CollectionsPage from "./components/collectionPage/CollectionsPage.vue";
import ProductsPage from "./components/PLP_Page/ProductsPage.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", redirect: "/collections" },
      {
         path: "/collections",
         component: CollectionsPage,
      },
      { path: "/collections/:collectionName", component: ProductsPage },

      { path: "/:NotFound(.*)", redirect: "/collections" },
   ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");

// https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json
// https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/{COLL_ID}/products.json
// https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/{PROD_ID}.json
