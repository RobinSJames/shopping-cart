<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://gph.is/2gERUhl" style="height:100px;width:100px;" />
    <ul v-else>
      <li v-for="(product, index) in products" :key="index">
        {{product.title}}-{{product.price | currency}} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters({
      productIsInStock: "products/productIsInStock"
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addProductToCart: "cart/addProductToCart"
    })
  },
  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  }
};
</script>

<style>
</style>