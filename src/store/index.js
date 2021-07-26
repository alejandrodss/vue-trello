import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters: {},
  actions: {},
  mutations
})