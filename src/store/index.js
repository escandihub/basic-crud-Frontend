import Vue from 'vue'
import Vuex from 'vuex'

import party from './party'
import notify from './notify'
import friend from './friend'
import things from './things'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    party,
    notify,
    friend,
    things
  }
})
