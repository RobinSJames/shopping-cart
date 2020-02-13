<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">{{product.title}}-{{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop";
export default {
  data: function() {
    return {
      products: []
    };
  },
  created() {
    shop.getProducts(products => {
      this.products = products;
    });
  }
};
</script>

<style>
</style>