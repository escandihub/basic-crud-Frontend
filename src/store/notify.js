export default {
  state: {
    noti: {
      isVisible: false,
      mensaje: ''
    }
  },
  getters: {
    notificar: state => {
      return state.noti
    }
  },
  mutations: {
    SET_NOTIFY: function (state, value) {
      state.noti = value
    },
    PUSH_NOTIFICATION: function(state, notification){
      state.noti = notification 
    }
  },
  action: {
    addNotification: ({commit}, notification) => {
      console.log(notification);
      commit('PUSH_NOTIFICATION', notification)
    }
  }
}