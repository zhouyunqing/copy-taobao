import Vue from 'vue'
import Router from 'vue-router'

// 主页
const Home = () => import( /* webpackChunkName: "home" */ '@/pages/home')

// 购彩模块
const BuyColor = (resolve) => {
  import ('@/pages/buy-color/buy-color').then((module) => {
    resolve(module)
  })
}

// 购物车
const Car = () => import( /* webpackChunkName: "car" */ '@/pages/car/car.vue')

// 登录
const Logout = () => import( /* webpackChunkName: "Logout" */ '@/pages/mine/login/logout.vue' )

// 电影列表
const Movie = (resolve) => {
  import('@/pages/mine/movie').then((module) => {
    resolve(module)
  })
}

const WaterfallFlow = () => import( /* webpackChunkName: "waterfall-flow" */ '@/pages/experence-effect/waterfall-flow')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/buy-color',
      children: [
        {
          path: '/buy-color',
          component: BuyColor
        },
        {
          path: '/car',
          component: Car
        }
      ]
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/logout',
      component: Logout
    },
    {
      path: '/waterfall-flow',
      component: WaterfallFlow
    }
  ]
})