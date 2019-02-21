const key = 'user'
const isLogin = 'isLogin'
export default {
  state: {
    user: null,
    isLogin: '0'
  },
  mutations: {
    setLogin: (state, value) => {
      state.isLogin = value
      localStorage.setItem(isLogin, value)
    },
    setStorage: (state, value) => {
      state.user = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    removeStorage: (state) => {
      state.user = null
      localStorage.removeItem(key)
    },  
  },

  actions: {
    setLogin (context, data) {
      context.commit('setLogin', data)
    },
    setStorage (context, data) {
      context.commit('setStorage', data)
    }
  },

  getters: {
    // 取用户信息
    getStorage (state) {
      if (!state.user) {
        state.user = JSON.parse(localStorage.getItem(key))
        state.isLogin = localStorage.getItem(isLogin)
      }
      return state.user
    },   
  }
}