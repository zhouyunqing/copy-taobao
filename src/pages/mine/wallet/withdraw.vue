<template>
  <div class="withdraw-wrap">
    <navbar title="提现"></navbar>
    <div class="tips">为了您的账户安全，请先下载多米彩票APP并且完善账户信息之后再申请提现。</div>
    <div class="download" @click="downLoad">点击下载APP</div>
    <Province></Province>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { mixins } from '@/common/js/mixin.js'
export default {
  mixins: [mixins],
  methods: {
    downLoad () {
      this.checkPhone()
    }
  },
  components: {
    Navbar,
    Province
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.withdraw-wrap {
  font-size: $font16; /*no*/
  .tips {
    margin-top: 90px;
    padding: 30px 30px 0;
  }
  .download {
    margin: 40px 30px 0;
    height: 90px;
    line-height: 90px;
    background: #ff0000;
    color: $white;
    text-align: center;
    border-radius: 8px;
  }
}
</style>
