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
    DELETE_FRIEND({ commit }, friend) {
      deleteFriendService(friend).then(res => {
        console.log(res);
        if (res.data.message) {
          commit('deleteFriend', friend);
        } else {
          console.log('Error al eliminar');
        }
      }).catch(err => {
        console.log(err);
      });
    },
    UPDATE_FRIEND_PARTY({ commit }, friend) {
      updateFriendService(friend).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}