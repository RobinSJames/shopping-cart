import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({
  //State is equivalent to data
  state: {
    products: []
  },
  //getters are equivalents to computed properties
  getters: {

  },
  //actions are equivalent to methods
  actions: {
    fetchProducts() {}
  },
  // responsible for setting and updating state
  mutations: {
    setProducts() {}
  }
})
