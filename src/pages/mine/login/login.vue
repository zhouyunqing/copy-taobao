<template>
  <div class="regist-wrap">
    <navbar :title="title"></navbar>
    <div class="login-wrap">
      <div class="login-tips">
         为了你的账户安全请填写一个手机号完成验证
      </div>

      <section class="login-content">
        <div class="login-list">
          <div class="login-list-item">
            <div class="login-list-label">手机号</div>
            <div class="login-list-control">
              <input type="text" class="login-list-input" v-model.trim="registData.tel">
            </div>
          </div>
          <div class="login-list-item">
            <div class="login-list-label">密码</div>
            <div class="login-list-control">
              <input type="password" class="login-list-input" v-model.trim="registData.password">
            </div>
          </div>
        </div>
      </section>

      <slider-block @passVerify="passVerify" ref="verify"></slider-block>
    </div>      
  </div> 
</template>

<script>
import Navbar from '@/components/navbar'
import SliderBlock from '@/components/slider-block'
export default {
  data () {
    return {
      title: '注册',
      registData: {}
    }
  },
  methods: {
    // 滑动通过
    passVerify () {
        if (this.registData.tel === '' || this.registData.tel === '' || !/^[1][0-9]{9}\d$/.test(this.registData.tel)) {
          this.$toast('请输入正确手机号')
          this.$refs.verify.moseUpFn()
        } else if (!this.registData.password) {
          this.$toast('请输入密码')
          this.$refs.verify.moseUpFn()
        } else {
          // 发送请求
        //   this.$store.dispatch('setStorage', {user: this.registData.tel})
        //   this.$store.dispatch('setLogin', '1')
          this.$router.push({path: '/mine'})
        }
    }
  },
  components: {
    Navbar, SliderBlock
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/public.scss';
.login-wrap {
  padding-top: 90px;
  .login-tips {
    margin: 20px 0;
    text-align: center;
    font-size: $font14; /*no*/
  }

  .login-content {
    margin: 20px 0;  
    background: $white;
    font-size: $font16; /*no*/
    .login-list {
      .login-list-item {
        display: flex;
        height: 90px;
        line-height: 90px;
        padding-left: 20px;
        border-bottom: 1px solid #d2d2d2; /*no*/
        .login-list-label {
          margin-right: 30px;
        }
        .login-list-control {
          flex: 1;
          .login-list-input {
            padding: 10px 0;
            outline: none;
            font-size: $font16; /*no*/
          }
        }
      }
    }
  }
}
</style>
