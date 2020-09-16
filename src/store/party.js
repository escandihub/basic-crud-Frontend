import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { axios } from "axios"
import { fiestas, newFiestas, EditFiestas } from "../services/fiesta"
import notify from "./notify"
export default {
  state: {
    partys: [],
    searchedParties: []
  },
  getters: {
    fiestas: state => {
      return state.partys;
    },
    searchedParties: state => {
      return state.searchedParties;
    }
  },
  mutations: {
    SET_PARTY: function (state, partys) {
      state.partys = partys;
    },
    ADD_PARTY: function (state, party) {
      state.partys.push(party);
    },
    SEARCH_PARTY: function ( state , query){
      let result = state.partys.filter( party => party.name.includes(query));
      state.searchedParties = result.length > 0 ? result : [] ;
    }
  },
  actions: {
    fetch_party({ commit }) {
      fiestas().then(fiestas => commit('SET_PARTY', fiestas.data)).catch(err => console.log(err));
    },

    NEW_PARTY({ dispatch, commit }, playload) {
      newFiestas(playload).then(res =>
        commit('ADD_PARTY', playload))
        .catch(err => console.log(err))
    },

    NUEVA_FIESTA(context) {
      context.dispatch('addNotification', {
        isVisible: true,
        mensaje: 'Se guardo Correctamente'
      }, { root: true })
    },
    EDIT_FIESTA(context, data) {
      return new Promise((resolve, reject) => {
        EditFiestas(data, data.id).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        }
        )
      })
    },
    SEARCH_PARTY_STORE({commit},query){
      if(query.length > 0){
        commit('SEARCH_PARTY', query); //haciendo busquda
      }
    }
  },
}
