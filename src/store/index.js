import Vue from 'vue'
import Vuex from 'vuex'
import shop from "@/api/shop";

Vue.use(Vuex)

export default new Vuex.Store({
  //State is equivalent to data
  state: {
    products: []
  },
  //getters are equivalents to computed properties
  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  //actions are equivalent to methods
  actions: {
    fetchProducts({
      commit
    }) {
      return new Promise((resolve, reject) => {
        // make the call
        // call setProducts mutation
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve()
        });
      })
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    }
    // addToCart(context, product) {
    //   if (product.inventory > 0) {
    //     context.commit("pushProductToCart", product)
    //   } else {
    //     // show out of stock message
    //   }
    // }
  },
  // responsible for setting and updating state
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  }
})
