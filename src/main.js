import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import axios from 'axios'
import '@/common/css/reset.sass'
import VueLazyLoad from 'vue-lazyload'
import Toast from '@/components/toast'
import VueBus from './common/js/vue-bus'

Vue.prototype.$axios = axios
Vue.use(Toast)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./common/img/error.jpg')
})
Vue.use(VueBus)

Vue.config.productionTip = false

console.log(process.env.VUE_APP_URL)

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      next({path: '/login'})
      alert('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
