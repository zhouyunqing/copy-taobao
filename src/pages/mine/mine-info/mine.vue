<template>
  <div class="mine-wrap">
    <div class="mine-header">
      <div class="user-info">
        <img src="../../../common/img/mine/avatar.png" class="avatar" alt="">
        <div class="username" v-if="username === ''" @click="toLogin">登录/注册</div>
        <div class="username" v-else>{{username}}</div>
      </div>
      <div class="user-account">
        <ul class="account-list">
          <li class="row">
            <div>可用余额</div>
            <div class="figure">888.00元</div>
          </li>
          <li class="row">
            <div>冻结金额</div>
            <div class="figure">888.00元</div>
          </li>
          <li class="row">
            <div>彩金</div>
            <div class="figure">888.00元</div>
          </li>
          <li class="row">
            <div>优惠券</div>
            <div class="figure">99个</div>
          </li>
        </ul>
      </div>
      <div class="user-operation" @click="useOparate">
        <div class="operation-type">充值</div>
        <div class="operation-type">提现</div>
      </div>
    </div>
    <div class="mine-content">
      <ul class="result-tab">
        <router-link :to="{path: `/mine/result/${item.id}`}" v-for="(item, index) of resultListData" :key="index">{{item.text}}</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      resultListData: [
        {
          id: 1,
          text: '全部'
        },{
          id: 2,
          text: '待开奖'
        },{
          id: 3,
          text: '中奖'
        },{
          id: 4,
          text: '追号'
        },{
          id: 5,
          text: '合买'
        },{
          id: 6,
          text: '跟单'
        },{
          id: 7,
          text: '娱乐'
        }
      ],
      routeId: 1
    }
  },
  methods: {
    // 跳转到登录
    toLogin () {
      this.$router.push({path: '/login'})
    },

    // 充值or体现
    useOparate (event) {
      console.log(event)
      if (event.target.innerHTML === '充值') {
        this.$router.push({path: '/recharge'})
      } else {
        this.$router.push({path: '/withdraw'})
      }
    },

    // 检查用户是否登录
    checkAuth () {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        this.username = user.user
        this.$router.replace({path: `/mine/result/${this.routeId}`})
      }
    }
  },
  mounted () {
    console.log(this.$route)
    if (!this.$route.params.id || this.$route.params.id === null) {
      this.routeId = 1
    } else {
      this.routeId = this.$route.params.id
    }
    this.checkAuth()
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.mine-wrap {
  .mine-header {
    max-width: 100%;
    height: 416px;
    background: url('../../../common/img/mine/bg.png') no-repeat;
    background-size: cover;
    font-size: $font14; /*no*/
    .user-info {
      display: flex;
      padding: 30px 24px; 
      border-bottom: 1px solid rgb(219, 71, 47); /*no*/
      .avatar {
        width: 80px;
        height: 80px;
      }
      .username {
        margin: 15px 0 0 20px;
        color: $white;
      }
    }
    .user-account {
      padding: 27px 19px;
      color: $white;
      .account-list {
        display: flex;
        text-align: center;
        .row {
          flex: 1;
          .figure {
            margin-top: 16px;
            font-size: $font16; /*no*/
          }
        }
      }
    }
    .user-operation {
      padding: 0 18px 0;
      display: flex;
      justify-content: space-evenly;
      font-size: $font16; /*no*/
      .operation-type {
        width: 332px;
        height: 92px;
        line-height: 92px;
        background: url('../../../common/img/mine/operation.png') no-repeat;
        background-size: cover;
        color: $white;
        text-align: center;
      }
    }
  }
  .mine-content {
    font-size: $font14; /*no*/
    .result-tab {     
      background: $white;
      display: flex;
      overflow-x: auto;
      // position: relative;
      a {
        // flex: 0 0 60px;
        // width: 200px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        padding: 0 30px;
        flex-grow: 0;
        flex-shrink: 0;
        &.router-link-exact-active {
          color: #ff0000;
          border-bottom: 1px solid #ff0000; /*no*/
        }
      }
    }
  }
}
::-webkit-scrollbar {
    display: none;
}
</style>

