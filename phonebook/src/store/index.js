import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import contact from './modules/contact'
import dialog from './modules/dialog'

export default new Vuex.Store({
  modules: {
    contact,
    dialog
  }
})
