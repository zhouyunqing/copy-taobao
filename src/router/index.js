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

// 我的
const Mine = () => import(/* webpackChunkName: "Mine" */ '@/pages/mine/mine')

// 登录
const Logout = () => import( /* webpackChunkName: "Logout" */ '@/pages/mine/login/logout.vue' )

// 注册
const Login = () => import( /* webpackChunkName: "Login" */ '@/pages/mine/login/login.vue' )

// 电影列表
const Movie = (resolve) => {
  import('@/pages/mine/movie').then((module) => {
    resolve(module)
  })
}

/* 效果体验区 */
const WaterfallFlow = () => import( /* webpackChunkName: "waterfall-flow" */ '@/pages/experence-effect/waterfall-flow')
const Tree = () => import( /* webpackChunkName: "tree" */ '@/pages/experence-effect/tree')
const Slider = () => import( /* webpackChunkName: "slider" */ '@/pages/experence-effect/slider-block')

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
        },
        {
          path: '/mine',
          component: Mine
        },
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
      path: '/login',
      component: Login
    },
    {
      path: '/waterfall-flow',
      component: WaterfallFlow
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/slider',
      component: Slider
    }
  ]
})