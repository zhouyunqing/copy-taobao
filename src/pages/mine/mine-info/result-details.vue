<template>
  <div class="details-wrap">
    <navbar :title="title"></navbar>
    <div class="mine-header">
      <div class="user-info">
        <img src="../../../common/img/error.jpg" class="avatar" alt="">
        <div class="username">竞彩足球 2018期</div>
      </div>
      <div class="user-account">
        <ul class="account-list">
          <li class="row">
            <div>订单金额</div>
            <div class="figure">200.00元</div>
          </li>
          <li class="row">
            <div>订单状态</div>
            <div class="figure order-state">已出票</div>
          </li>
          <li class="row">
            <div>奖金</div>
            <div class="figure">-</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 方案信息S -->
    <section class="scheme-information">
      <div class="scheme-title">方案信息</div>
      <div class="mgtop20">
        <span class="left-text-width">发起人</span>：
        <b class="right-text-width">j竞彩精准狙击</b>
      </div>
      <div class="mgtop20">
        <span class="left-text-width">金 额</span>：
        <b class="right-text-width">200.00元</b>
      </div>
      <div class="mgtop20">
        <span class="left-text-width">我的认购</span>：
        <b class="right-text-width">250倍 共1000元</b>
      </div>
      <div class="mgtop20">
        <span class="left-text-width">佣 金</span>：
        <b class="right-text-width">10%</b>
      </div>
      <div class="mgtop20">
        <span class="left-text-width">投注信息</span>：
        <b class="right-text-width">截止后可见</b>
      </div>
    </section>
    <!-- 方案信息E -->

    <!-- 投注信息S -->
    <!-- 投注信息标题S -->
    <div class="bet-information-title">投注信息 2场11倍</div>
    <!-- 投注信息标题E -->
    
    <div class="bet-information-content">
      <table class="bet-table">
        <thead>
          <tr>
            <th>场次</th>
            <th>主队vs客队</th>
            <th>玩法</th>
            <th>投注</th>
            <th>彩果</th>
          </tr>
        </thead>
        <tbody class="bet-table-tbody">
          <tr>
            <td>周日018</td>
            <td>
              <div>悉尼FC</div>
              <div>[1:0][3:0]</div>
              <div>阿德莱德</div>
            </td>
            <td>胜平负</td>
            <td>
              <div>胜</div>
              <div>1.98</div>
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <div class="user-bet-tips user-order-info">
        <div class="mgtop20 user-flex">
          <span class="left-text-width">标 题</span>：
          <b class="right-text-width order-text-style">手机爱卡等级奥斯卡大家爱看第三方士大夫</b>
        </div>
        <div class="mgtop20 user-flex">
          <span class="left-text-width">描 述</span>：
          <b class="right-text-width order-text-style">手机爱卡等级奥斯卡大家爱看</b>
        </div>
        <div class="mgtop20">
          <span class="left-text-width">下单时间</span>：
          <b class="right-text-width">2018-04-04  16:32:23</b>
        </div>
        <div class="mgtop20">
          <span class="left-text-width">订单编号</span>：
          <b class="right-text-width">2018JCZQ1237723</b>
        </div>
        <div class="mgtop20">
          <span class="left-text-width">温馨提示</span>：
          <b class="right-text-width">中奖后奖金自动打入您的账户</b>
        </div>
      </div>
    </div>
    <!-- 投注信息E -->
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    if (this.$route.query.orderType === '普通订单') {
      this.title = '普通投注详情'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '../../../common/css/public.sass';
.details-wrap {
  margin-top: 90px;
  .mine-header {
    max-width: 100%;
    font-size: $font14; /*no*/
    .user-info {
      display: flex;
      padding: 30px 24px;
      background: $white;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        animation: rotate 20s linear infinite
      }
      @keyframes rotate {
        0% {
          transform: rotate(0)
        }
        100% {
          transform: rotate(360deg)
        }
      }
      .username {
        margin: 15px 0 0 20px;
      }
    }
    .user-account {
      margin-top: 20px;
      padding: 27px 19px;
      background: $white;
      font-size: $font12; /*px*/
      .account-list {
        display: flex;
        text-align: center;
        .row {
          flex: 1;
          .figure {
            margin-top: 16px;
          }
          .order-state {
            color: rgb(214, 66, 52);
          }
        }
      }
    }
  }
  .scheme-information, .user-bet-tips {
    margin-top: 20px;
    background: $white;
    padding: 30px;
    .scheme-title {
      font-size: $font16; /*no*/
    }
    .mgtop20 {
      margin-top: 20px;
      font-size: $font14; /*no*/
      .left-text-width {
        display: inline-block;
        width: 120px;
      }
      .right-text-width {
        margin-left: 20px;
      }
    }
  }
  .bet-information-title {
    padding: 20px 0 20px 30px;
  }
  .bet-information-content {
    background: $white;
    padding: 20px 30px 80px;
    .bet-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      text-align: left;
      border-radius: 4px 4px 0 0;
      thead tr th {
        background: #fafafa;
        padding: 16px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        border-bottom: 1px solid #e8e8e8;
        font-size: $font14; /*no*/
      }
      .bet-table-tbody {
        tr {
          transition: all .3s;
          td {
            padding: 16px;
            transition: all .3s;
            border-bottom: 1px solid #e8e8e8;
            word-break: break-word;
            text-align: center;
          }
        }
      }
    }
    .user-order-info {
      padding: 0;
      .user-flex {
        display: flex;
        .order-text-style {
          max-width: 520px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
