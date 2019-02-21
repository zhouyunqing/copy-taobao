<template>
  <div class="regist-wrap">
    <navbar :title="title"></navbar>
      <div class="login-type">
        <div class="tel-mode">
          <div class="tel-area">
            <input type="number" class="input-style tel-style" placeholder="请输入11位手机号码" v-model.number="registData.tel" />
            <button class="get-code" :class="{dis: registData.disabled}" :disabled="registData.disabled" @click="getCode">{{registData.msgText}}</button>
          </div>
          <div class="code-area">
            <input type="number" class="input-style input-code" placeholder="请输入验证码" v-model.number="registData.code" />
          </div>
          <div class="pass-area">
            <input type="password" class="input-style set-pass" placeholder="请设置登录密码，6-16字符" v-model.trim="registData.password" />
          </div>
        </div>

        <div class="immediately-regist" @click="immediatelyRegist">立即注册</div>
      </div>
  </div> 
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  data () {
    return {
      title: '注册',   
      registData: {
        tel: '13036123349',
        code: '',
        disabled: false,
        msgText: '获取验证码',
        password: ''
      }
    }
  },
  methods: {
    // 获取验证码
    getCode () {
      if (this.registData.tel === '' || !/^[1][0-9]{9}\d$/.test(this.registData.tel)) {
        this.$toast('请输入正确的手机号')
        return false
      } else {
        this._codeCountDown(20)
      }
    },

    // 立即注册
    immediatelyRegist () {
      if (this.registData.tel === '') {
          this.$toast('请输入手机号')
          return false
        } else if (this.registData.code === '') {
          this.$toast('请输入验证码')
        } else if (this.registData.password === '') {
          this.$toast('请设置密码')
        } else {
          // 发送请求
          this.$store.dispatch('setStorage', {user: this.registData.tel})
          this.$store.dispatch('setLogin', '1')
          this.$router.push({path: '/mine'})
        }
    },

    // 验证码倒计时
    _codeCountDown (sec) {
      for (let i = 0; i <= sec; i++) {
        let timer = setTimeout(() => {
          if (sec != 0) {
            this.registData.msgText = sec + "秒后获取" 
            sec--
            this.registData.disabled = true
          } else {
            clearTimeout(timer)
            this.registData.msgText = '重新获取' //如果倒计时结束就让  获取验证码显示出来
            this.registData.disabled = false 
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
  .login-type {
    font-size: $font16; /*no*/
    margin-top: 90px;
    padding: 60px 50px;
    .tel-mode {
      .tel-area, .code-area, .pass-area {
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
      .code-area, .pass-area {
        margin-top: 30px;
        .input-code, .set-pass {
          width: 100%;
        }
      }
    }
    .user, .pass {
      width: 100%;
      height: 40px;
      text-indent: 12px;
      line-height: 40px;
      padding: 10px 0;
    }
    .pass-style {
      margin-top: 30px;
    }
    .immediately-regist {
      margin-top: 50px;
      text-align: center;
      color: $white;
      background: #ff0000;
      padding: 20px 0;
      border-radius: 8px;
    }
  }
</style>
