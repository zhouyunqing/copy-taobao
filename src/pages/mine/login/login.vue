<template>
  <div class="login-wrap">
    <navbar title="登录" rightText="注册" @rightEven="toRegist"></navbar>
    <div class="login-header">
      <div class="tabs-type" v-for="(item, index) of tabData" :key="index" @click="change(index)">
        <span :class="{active:index === tabActive}">{{item.text}}</span>
      </div>
    </div>

    <div class="login-type">
      <div v-if="tabActive === 0" class="tel-mode">
        <div class="tel-area">
          <input type="number" class="input-style tel-style" placeholder="请输入11位手机号码" v-model="loginData.tel" />
          <button class="get-code" :class="{dis: loginData.disabled}" :disabled="loginData.disabled" @click="getCode">{{loginData.msgText}}</button>
        </div>
        <div class="code-area">
          <input type="number" class="input-style input-code" placeholder="请输入验证码" v-model="loginData.code" />
        </div>
      </div>
      
      <div v-if="tabActive === 1">
        <input type="number" class="user" placeholder="请输入用户名" v-model="userData.username" />
        <input type="password" class="pass pass-style" placeholder="请输入密码" v-model="userData.password">
      </div>

      <div class="fast-enter" @click="fastEnter">立即登录</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  data () {
    return {
      tabActive: 0,
      tabData: [
        {text: '手机号快捷登录'},
        {text: '账号密码登录'}
      ],
      userData: {
        username: '',
        password: ''
      },
      loginFlag: 0,   // 登录类型
      loginData: {
        tel: '',
        code: '',
        disabled: false,
        msgText: '获取验证码'
      }
    }
  },
  methods: {
    // 跳转到注册页面
    toRegist () {
      this.$router.push({path: '/regist'})
    },

    // tab切换
    change (index) {
      this.tabActive = this.loginFlag = index
    },

    // 获取验证码
    getCode () {
      if (this.loginData.tel === '' || !/^[1][0-9]{9}\d$/.test(this.loginData.tel)) {
        this.$toast('请输入正确的手机号')
        return false
      } else {
        this._codeCountDown(20)
      }
    },

    // 立即登录
    fastEnter () {
      if (this.loginFlag === 0) {
        // 表示手机号快速登录
        if (this.loginData.tel === '') {
          this.$toast('请输入手机号')
          return false
        } else if (this.loginData.code === '') {
          this.$toast('请输入验证码')
        } else {
          // 发送请求
          console.log('成功')
        }
      } else {
        // 表示用户名、密码登录
        if (this.userData.username === '') {
          this.$toast('请输入用户名')
          return false
        } else if (this.userData.password === '') {
          this.$toast('请输入密码')
        } else {
          // 发送请求
          console.log('成功')
        }
      }
    },

    // 验证码倒计时
    _codeCountDown (sec) {
      for(let i = 0; i <= sec; i++){
        let timer = setTimeout(() => {
          if (sec != 0) {
            this.loginData.msgText = sec + "秒" 
            sec--
            this.loginData.disabled = true
          } else {
            clearTimeout(timer)
            this.loginData.msgText = '重新获取' //如果倒计时结束就让  获取验证码显示出来
            this.loginData.disabled = false
          }
        }, i * 1000)
      }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.login-wrap {
  font-size: $font14; /*no*/
  .login-header {
    margin-top: 90px;
    display: flex;
    padding: 20px 30px 0;
    font-size: $font16; /*no*/
    text-align: center;
    .tabs-type {
      flex: 1;
    }
    .active {
      padding: 0 0 10px 0;
      color: #ff0000;
      border-bottom: 1px solid #ff0000; /*no*/
    }
  }
  .login-type {
    margin-top: 60px;
    padding: 0 50px;
    .tel-mode {
      .tel-area, .code-area {
        display: flex;
        justify-content: space-between;
        .tel-style {
          flex: .93;
        }
        .input-style {
          height: 80px;
          font-size: $font16; /*no*/
          padding: 0 10px;
        }
        .get-code {
          border: none;
          height: 80px;
          line-height: 80px;
          padding: 0 10px;
          background: #ff0000;
          color: $white;
          outline: none;
          border-radius: 8px;
          font-size: $font14; /*no*/
        }
        .dis {
          opacity: .3
        }
      }
      .code-area {
        margin-top: 30px;
        .input-code {
          width: 100%;
        }
      }
    }
    .user, .pass {
      width: 100%;
      height: 80px;
      font-size: $font16; /*no*/
      text-indent: 12px;
    }
    .pass-style {
      margin-top: 30px;
    }
    .fast-enter {
      margin-top: 50px;
      text-align: center;
      color: $white;
      background: #ff0000;
      padding: 20px 0;
      border-radius: 8px;
      font-size: $font16; /*no*/
    }
  }
}
</style>
