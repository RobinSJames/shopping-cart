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
    },
    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
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
    addProductToCart({ state, getters, commit }, product) {
      if (getters.productIsInStock(product)) {
        const cartItem = state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementProductInventory', product)
      }
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  },
  // responsible for setting and updating state
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    decrementProductInventory(state, product) {
      product.inventory--
    }
  }
})
