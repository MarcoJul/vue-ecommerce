<template>
   <router-view></router-view>
</template>

<script>
export default {
   data() {
      return {
         collections: [],
      };
   },
};
</script>

<style>
@import url("https://api.fontshare.com/css?f[]=stardom@400&f[]=satoshi@300,400,500&display=swap");

*,
*:before,
*:after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

html {
   font-size: 62.5%;
}
</style>
