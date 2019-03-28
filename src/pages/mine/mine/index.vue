<template>
  <div class="mine-wrap">
    <div class="header">
      <div class="left-avator">
        <div class="head-portrait"></div>
      </div>
      <div class="right-user">
        <div class="nick-name">设置淘宝昵称</div>
        <div class="desc">我是帅哥</div>
      </div>
    </div>
    <div class="vip-info">
      <div class="vip-left-info">
        <span class="vip-logo"></span>
        <i class="naughty-value">淘气值539</i>
      </div>
      <div class="vip-middle-line"></div>
      <div class="vip-right-info">
        花小积分 兑大收益
      </div>
    </div>

    <div class="my-order">1111</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.mine-wrap {
  margin-top: -5px;
  background-color: #FF5000;
  background-image: linear-gradient(to right, #FD9126, #FF5000);
  .header {
    display: flex;
    overflow: hidden;
    width: 750px;
    height: 162px;
    place-self: flex-start;
    flex: 0 0 auto;
    .left-avator {
      display: flex;
      border-radius: 50px;
      margin-left: 36px;
      margin-top: 56px;
      width: 98px;
      height: 98px;
      .head-portrait {
        display: flex;
        width: 98px;
        height: 98px;
        border: 1px solid $white;
        border-radius: 50%;
        background: url('../../../common/img/mine/avator.png') no-repeat;
        background-size: contain;
      }
    }
    .right-user {
      margin-top: 50px;
      margin-left: 40px;
      color: $white;
      .nick-name {
        font-size: $font20; /*no*/
        width: 400px;
      }
      .desc {
        width: 290px;
        margin-top: 10px;
      }
    }
  }

  /* 会员、淘气值 */
  .vip-info {
    position: relative;
    display: flex;
    overflow: hidden;
    top: 60px;
    height: 120px;
    background: $white;
    margin: 0 40px;
    border-radius: 24px;
    .vip-left-info {
      display: flex;
      flex-direction: column;
      padding: 20px;
      .vip-logo {
        width: 140px;
        height: 28px;
        background: url('../../../common/img/mine/vip-logo.png') no-repeat;
        background-size: contain;
      }
      .naughty-value {
        margin-top: 10px;
        color: #666;
        font-size: $font12; /*no*/
      }
    }
    .vip-middle-line {
      display: flex;
      overflow: hidden;
      width: 2px;
      height: 70px;
      margin-top: 24px;
      background-color: #eee;
    }
    .vip-right-info {
      padding: 20px 15px;
      color: #666;
    }
  }

  .my-order {
    position: relative;
    top: 80px;
  }
}
</style>

