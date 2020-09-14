import { getThings, addNewThing } from '@/services/cosas';

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
    FETCH_THINGS({ commit }, id_party) {
      getThings(id_party).then(res => {
        commit('GET_THINGS', res.data.data)
      }).catch(err => {
        console.log(err);
      })
    },
    UPDATE_THINGS({commit}, data){
      commit('updateCosas', data)
    },

    NEW_THING({commit},data, id){
      return new Promise((Response, reject) => {
        addNewThing(data, id).then(res => {
          Response(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}