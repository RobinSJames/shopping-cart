import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./modules/cart"
import products from "./modules/products"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  //State is equivalent to data
  state: {

  },
  //getters are equivalents to computed properties
  getters: {

  },
  //actions are equivalent to methods
  actions: {

  },
  // responsible for setting and updating state
  mutations: {

  }
})
