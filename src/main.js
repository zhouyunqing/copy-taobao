import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import axios from 'axios'
import '@/assets/scss/reset.scss'
import VueLazyLoad from 'vue-lazyload'
import Toast from '@/components/toast'
import VueBus from './assets/js/vue-bus'
import Filter from '@/filter'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 工具函数
import utils from '@/assets/js/utils.js'
Vue.prototype.$utils = utils

Vue.prototype.$axios = axios
Vue.use(Toast)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./assets/img/error.jpg')
})
Vue.use(VueBus)
Vue.use(Filter)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

console.log(process.env.VUE_APP_URL)


new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
