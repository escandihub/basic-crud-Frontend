import { axios } from "axios"
import { fiestas, newFiestas, EditFiestas } from "../services/fiesta"
import notify from "./notify"
export default {
  state: {
    partys: [],
  },
  getters: {
    fiestas: state => {
      return state.partys
    }
  },
  mutations: {
    SET_PARTY: function (state, partys) {
      state.partys = partys
    },
    ADD_PARTY: function (state, party) {
      state.partys.push(party)
    }
  },
  actions: {
    fetch_party({ commit }) {
      fiestas().then(fiestas => commit('SET_PARTY', fiestas.data)).catch(err => console.log(err))
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
    }
  },
}
