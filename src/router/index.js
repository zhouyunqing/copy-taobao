import Vue from 'vue'
import Router from 'vue-router'

// 主容器
const Home = () => import( /* webpackChunkName: "home" */ '@/pages/home')

// 我的模块
const Mine = (resolve) => {
  import('@/pages/mine/mine-info/mine').then((module) => {
    resolve(module)
  })
}

// 中奖tab
const MineResult = (resolve) => {
  import('@/pages/mine/mine-info/mine-result').then((module) => {
    resolve(module)
  })
}

// 中奖详情
const MineResultDetail = (resolve) => {
  import('@/pages/mine/mine-info/result-details').then((module) => {
    resolve(module)
  })
}

// 购彩模块
const BuyColor = (resolve) => {
  import ('@/pages/buy-color/buy-color').then((module) => {
    resolve(module)
  })
}

// 充值模块
const Recharge = (resolve) => {
  import('@/pages/mine/wallet/recharge').then((module) => {
    resolve(module)
  })
}

// 提现模块
const WithDraw = (resolve) => {
  import('@/pages/mine/wallet/withdraw').then((module) => {
    resolve(module)
  })
}

// 登录模块
const Login = (resolve) => {
  import('@/pages/mine/login/login').then((module) => {
    resolve(module)
  })
}

// 注册模块
const Regist = (resolve) => {
  import('@/pages/mine/login/regist').then((module) => {
    resolve(module)
  })
}

// 专家推荐详情
const RecommendDetail = (resolve) => {
  import('@/pages/buy-color/recommend-detail').then((module) => {
    resolve(module)
  })
}

// 电影列表
const Movie = (resolve) => {
  import('@/pages/mine/movie').then((module) => {
    resolve(module)
  })
}

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
          path: '/mine',
          component: Mine,
          children: [
            {
              path: 'result/:id',
              component: MineResult,
              meta: {auth: true}
            }
          ]
        }
      ]
    },
    {
      path: '/result-detail',
      name: 'ResultDetail',
      component: MineResultDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/recharge',
      component: Recharge,
      meta: {auth: true}
    },
    {
      path: '/withdraw',
      component: WithDraw,
      meta: {auth: true}
    },
    {
      path: '/recommend-detail/:id',
      component: RecommendDetail
    },
    {
      path: '/movie',
      component: Movie
    }
  ]
})