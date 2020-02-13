<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://gph.is/2gERUhl" style="height:100px;width:100px;" />
    <ul v-else>
      <li v-for="(product, index) in products" :key="index">{{product.title}}-{{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    products() {
      return store.getters.availableProducts;
    }
  },
  created() {
    store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style>
</style>