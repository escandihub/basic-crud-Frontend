import { getThings } from '@/services/cosas';

export default { 
  state: {
    cosas: []
  },
  getters: {
    getCosas: state => {
      return state.cosas
    }
  },

  mutations: {
    updateCosas: (state, payload) => {
      state.cosas.push(payload) 
    },
    GET_THINGS: (state, payload) => {
      state.cosas = payload
    }
    
  },

  actions: {
    FETCH_THINGS({ commit }) {
      getThings().then(res => {
        console.log(res);
        commit('GET_THINGS', res.data)
      }).catch(err => {
        console.log(err);
      })
    },
    UPDATE_THINGS({commit}, data){
      commit('updateCosas', data)
    }
  }
}