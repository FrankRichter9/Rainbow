import Vue from 'vue'
import Vuex from 'vuex'
import products from './products/products'
import accounts from './products/accounts'
import newItems from './products/newItems'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    accounts,
    newItems
  }
})
