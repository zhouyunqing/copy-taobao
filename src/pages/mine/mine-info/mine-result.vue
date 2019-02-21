<template>
  <div class="mine-result-wrap">
    <div class="laoding-content" v-if="!orderInfo.length">
      <loading title="拼命加载中..."></loading>
    </div>   
    <section class="result-list" v-for="(item, index) of orderInfo" :key="index" @click="toResultDetail(item)">
      <div class="list-left row">
        <div class="title">{{item.title}}</div>
        <div class="mgtop">彩金消费 {{item.handsel}}元</div>
        <div class="mgtop">金额消费 {{item.money}}元</div>
      </div>
      <div class="list-center row">
        <span>{{item.orderType}}</span>
      </div>
      <div class="list-right row">
        <span :class="[item.ticketStatus === '已出票' ? 'draw-bill' : 'cancel-ticket']">{{item.ticketStatus}}</span>
        <i class="right-icon"></i>
      </div>
    </section>
  </div>
</template>

<script>
import Loading from '@/components/loading'
export default {
  data () {
    return {
      orderInfo: [
        {
          id: 1,
          title: '陕西11选5',
          handsel: '0.00',
          money: '2.00',
          state: 'draw',
          orderType: '普通订单',
          ticketStatus: '已出票'
        },
        {
          id: 2,
          title: '陕西11选5',
          handsel: '0.00',
          money: '10.00',
          state: 'cancel',
          orderType: '普通订单',
          ticketStatus: '已撤票'
        }
      ]
    }
  },
  methods: {
    toResultDetail (data) {
      this.$router.push({path: '/result-detail', query: {id: data.id, state: data.state, orderType: data.orderType}})
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.mine-result-wrap {
  margin-top: 20px;
  font-size: $font12; /*no*/
  .laoding-content {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .result-list {
    display: flex;
    align-items: center;
    background: $white;
    padding: 20px;
    border-bottom: 1px solid rgb(245, 245, 245); /*no*/
    .row {
      flex: 1;
    }
    .list-left {
      color: #999;
      .title {
        color: #000;
        font-size: $font14; /*no*/
      }
      .mgtop {
        margin-top: 10px;
      }
    }
    .list-center {
      text-align: center;
      color: #999;
    }
    .list-right {
      text-align: right;
      .cancel-ticket {
        color: #ff0000;
      }
      .right-icon {
        display: inline-block;
        width: 18px;
        height: 28.4px;
        background: url('../../../common/img/mine/right.png') no-repeat;
        background-size: contain;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
}
</style>
