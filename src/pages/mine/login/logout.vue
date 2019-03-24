<template>
  <div class="login-wrap">
    <navbar title="登录"></navbar>
    <div class="logo"></div>

    <div class="am-list">
      <div class="am-list-item">
        <div class="am-list-control">
          <input type="text" class="am-input-require" v-model="logout.username" placeholder="手机号/用户名">
        </div>
      </div>
      <div class="am-list-item">
        <div class="am-list-control">
          <input type="password" class="am-input-require" v-model="logout.password" placeholder="请输入密码">
        </div>
      </div>

      <div class="other-link">
        <span class="f-right">免费注册</span>
      </div>

      <div class="am-field" @click="toLogout">
        <span class="am-button">登 录</span>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  data () {
    return {
      logout: {}
    }
  },
  methods: {
    // 登录
    toLogout () {
      if (!this.logout.username) {  
        this.$toast('请输入用户名')
      } else if (!this.logout.password) {
        this.$toast('请输入密码')
      } else {
        console.log('跳转')
      }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped lang="scss">
@import '../../../common/css/public.sass';
.login-wrap {
  .logo {
    width: 160px;
    height: 160px;
    margin: 160px auto 0;
    background: url('../../../common/img/mine/logo.png') no-repeat;
    background-size: contain;
  }
  .am-list {
    position: relative;
    width: 658px;
    margin: 0 auto;
    font-size: $font16; /*no*/
    color: #333;
    .am-list-item {
      position: relative;
      width: 100%;
      margin: 90px 0 0;
      border-bottom: 1px solid #ff5000; /*no*/
      .am-input-require {
          width: 580px;
          height: 36px;
          margin: 0 0 13px 9px;
          outline: none;
          border: 0;
          color: #333;
          font-size: inherit;
          background: #f5f5f5;
      }
    }
    .other-link {
      display: flex;
      margin-top: 44px;
      width: 658px;
      justify-content: flex-end;
      font-size: $font14; /*no*/
      .f-right {
        margin-right: 8px;
        color: #555;
      }
    }
    .am-field {
      display: flex;
      width: 658px;
      margin: 70px auto 0;
      justify-content: space-between;
      font-size: $font14; /*no*/
      .am-button {
        width: 100%;
        height: 90px;
        line-height: 90px;
        border-radius: 45px;
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color: #fff;
        box-shadow: 0 3px 6px #f7c7b1;
        text-align: center;
        font-size: $font16; /*no*/
      }
    }
  }
}
</style>
