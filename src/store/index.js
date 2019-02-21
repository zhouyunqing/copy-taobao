import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'   // 是否登录权限
import Shop from './shop'   // 投注价格计算

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Shop,
    Auth
  }
})

export default store