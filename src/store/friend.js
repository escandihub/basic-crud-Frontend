import { getAmigos } from '@/services/amigos.js';
export default {
  state: {
    amigos: []
  },
  getters: {
    getterAmigos: state => {
      return state.amigos
    }
  },

  mutations: {
    updateAmigos: (state, payload) => {
      state.amigos = payload
    }
  },

  actions: {
    FETCH_AMIGOS({ commit }) {
      getAmigos().then(res => {
        commit('updateAmigos', res.friends)
      }).catch(err => {
        console.log(err);
      })
    }
  }
}