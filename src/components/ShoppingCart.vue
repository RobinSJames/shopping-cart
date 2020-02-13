<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li
        v-for="(product, index) in products"
        :key="index"
      >{{product.title}} - {{product.price}} - {{product.quantity}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    }
  }
};
</script>

<style>
</style>