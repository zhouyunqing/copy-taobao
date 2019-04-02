import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 主页
const HomeView = () => import( /* webpackChunkName: "home" */ '@/pages/home')

// 购彩模块
const Home = (resolve) => {
  import ('@/pages/home/home').then((module) => {
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
const Movie = () => import(/* webpackChunkName: "movie" */ '@/pages/mine/movie' )

/* 效果体验区 */
const WaterfallFlow = () => import( /* webpackChunkName: "waterfall-flow" */ '@/pages/experence-effect/waterfall-flow')
const Tree = () => import( /* webpackChunkName: "tree" */ '@/pages/experence-effect/tree')
const Slider = () => import( /* webpackChunkName: "slider" */ '@/pages/experence-effect/slider-block')


const router = new Router({
  routes: [
    {
      path: '/',
      component: HomeView,
      redirect: '/home',
      meta: {
        auth: false
      },
      children: [
        {
          path: '/home',
          component: Home,
          meta: {
            auth: false
          }
        },
        {
          path: '/car',
          component: Car,
          meta: {
            auth: true
          }
        },
        {
          path: '/mine',
          component: Mine,
          meta: {
            auth: true
          }
        },
      ]
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/logout',
      component: Logout,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        auth: false
      }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      Vue.prototype.$toast('请先登录')
      setTimeout(()=>{
        next({path: '/logout'})
      },1000)
    }
  } else {
    next()
  }
})

export default router