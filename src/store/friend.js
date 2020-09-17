import { getAmigos, deleteFriendService, updateFriendService } from '@/services/amigos.js';
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
    },
    deleteFriend: (state, deletedFriend) => {
      state.amigos = state.amigos.filter(friend => friend.id != deletedFriend.id);
    },
  },

  actions: {
    FETCH_AMIGOS({ commit }) {
      getAmigos().then(res => {
        commit('updateAmigos', res.friends);
      }).catch(err => {
        console.log(err);
      });
    },
    DELETE_FRIEND({ rootState, commit }, friend) {
      deleteFriendService(friend).then(res => {
        console.log(res);
        if (res.data.message) {
          commit('deleteFriend', friend);
          rootState.notify.noti = {
            isVisible: true,
            mensaje: 'Se ha eliminado este amigo, 😢'
          }
        } else {
          console.log('Error al eliminar');
        }
      }).catch(err => {
        console.log(err);
      });
    },
    UPDATE_FRIEND_PARTY({ rootState, commit }, friend) {
      updateFriendService(friend).then(res => {
        rootState.notify.noti = {
          isVisible: true,
          mensaje: 'Se ha suscrito a una fiesta 🥳'
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}