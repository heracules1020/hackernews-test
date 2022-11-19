import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'state',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    newStories: []
  },
  mutations,
  actions,
  plugins: [vuexLocalStorage.plugin]
})
