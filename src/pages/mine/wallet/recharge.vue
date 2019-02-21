<template>
  <div class="recharge-wrap">
    <Navbar title="充值" />
    <div class="enter-sum">
      <input type="number" class="sum-input" placeholder="请输入充值金额" v-model="sum" @keyup="changeMoney">
    </div>
    <div class="select-sum">
      <ul class="pay-amout">
        <li v-for="(money, index) of moneys" :key="index" :class="{actives:index === selectActive}"
            @click="chooseMoney(index, money.name)" ref="defaultMoney">{{money.name}}元</li>
      </ul>
    </div>
    <div class="tip">为防止洗钱和套现，单笔充值金额需消费30%后才可提现</div>
    <div class="payment-content" @click="payment">
      <div class="payment-type">微信支付</div>
      <div class="payment-type alipay-type">支付宝支付</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  data () {
    return {
      sum: '',
      selectActive: 1,
      moneys: [
        {name: 20},
        {name: 50},
        {name: 100},
        {name: 200},
        {name: 500},
        {name: 1000}
      ]
    }
  },
  props: {
    // 最小10元，，，最大10000元
    min: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 10000
    }
  },
  methods: {
    // 选择金额
    chooseMoney (index, sum) {
      this.selectActive = index;
      this.sum = sum
    },

    // 输入金额
    changeMoney () {
      this.selectActive = -1;
      let fix;
      if(typeof this.sum === "string"){
        fix = this.sum.replace(/\D/g,"");
      }else{
        fix = this.sum  //10
      }
      if (fix <= 0 && fix !== '') {
        // 把最小值给他
        fix = this.min
      } else if (fix > this.max ) {
        fix = this.max
      }
      this.sum = fix;

      /*
      * 检查输入的金额是否能匹配到数组中原有的金额
      * 如果有，则加上背景色
      * */
      this.moneys.forEach((item, index) => {
        if (Number(this.sum) === item.name) {
          this.selectActive = index
        }
      })
    },

    // 支付方式
    payment (event) {
      if (this.sum !== '') {
        if(event.target.innerHTML === '微信支付') {
          // 调用微信支付
        } else {
          // 调用支付宝支付
        }
      } else {
        this.$toast('请输入金额');
        return false
      }
    },

    // 微信支付 and 支付宝支付
    wechartOrAlipay (money) {
      this.$axios.get(`https://www.baidu.com/${money}`)
    }
  },

  mounted () {
    // 获取默认选中的金额
    let oFirstSelect = this.$refs.defaultMoney;
    for (let i = 0; i < oFirstSelect.length; i++) {
      if (oFirstSelect[i].getAttribute('class') === 'actives') {
        this.sum = oFirstSelect[i].innerHTML.replace('元', '');
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
.recharge-wrap {
  margin-top: 90px;
  padding: 40px;
  font-size: $font14; /* no */
  .sum-input {
    width: 100%;
    height: 60px;
    line-height: 60px;
    outline: none;
    text-indent: 12px;
    padding: 10px 0;
    font-size: $font16; /*no*/
    border-radius: 4px; /*no*/
  }
  .select-sum {
    margin-top: 40px;
    .pay-amout {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 30px;
      text-align: center;
      li {
        width: 30%;
        margin-bottom: 40px;
        display: block;
        font-size: $font16; /*no*/
        line-height: 64px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 8px;
        border: 1px solid #c4c6c7; /*no*/
        &.actives {
          color: $white;
          background: linear-gradient(rgb(246, 107, 87), rgb(234, 57, 44));
        }
      }
    }
  }
  .tip {
    font-size: $font12;  /*no*/
  }
  .payment-content {
    margin-top: 60px;
    text-align: center;
    color: $white;
    font-size: $font16; /*no*/
    .payment-type {
      height: 80px;
      line-height: 80px;
      background: #de5a5a;
      border: 1px solid #f5f5f5;
    }
    .alipay-type {
      margin-top: 30px;
    }
  }
}
</style>
