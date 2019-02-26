<template>
  <div class="buy-color-wrap">
    <div class="sc-bxivhb">
      <div class="header-bd">
        <a class="placeholder" @click="openSearch"><span class="text iconfont icon-search">寻找宝贝店铺</span></a>
      </div>
    </div>
    <!-- 轮播图S -->
    <div ref="scroll" class="slide-show">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
      </div>
    </div>
    <!-- 轮播图E -->

    <!-- wrapper -->
    <ul class="box-wrapper">
      <li v-for="(item, index) in wrapperData" :key="index">
        <router-link to="" class="block">
          <img :src="item.icon" class="wrap-icon icon-tm">
          <span class="wrapper-text">{{item.text}}</span>
        </router-link>
      </li>
    </ul>
    <!-- wrapper -->

    <!-- 中奖头条S -->
    <div class="notice">
      <div class="notice-text">淘宝头条</div>
      <div class="wrap">
        <marquee direction="up" scrolldelay="1" scrollamount="1" loop="-1" behavior="scroll" hspace="20" vspace="1" 
                width="100%" height="30px">                   
          <p>恭喜 135****2801会员成功。</p>
          <p>恭喜 138****2251会员成功。</p>
          <p>恭喜 159****3368会员成功。</p>
          <p>恭喜 135****2287会员成功。</p>
          <p>恭喜 155****2567会员成功。</p>
          <p>恭喜 152****8967会员成功。</p>
          <p>恭喜 139****5468会员成功。</p>
        </marquee>
      </div>
    </div>
    <!-- 中奖头条E -->

    <!-- 焦点赛事S -->
    <div v-if="activeData.length" class="slider-wrapper focus-event">
      <div class="title">焦点赛事</div>
      <slider :autoPlay="false">
        <div  v-for="(item, index) in activeData" :key="index">
          <div class="live-content">
            <div class="first">
              <div class="img-width">
                <img class="team-icon" src="../../common/img/group1.png" alt="">
              </div>
              <div class="competition-time">
                <p class="team-date">欧冠 周一001</p>
                <p class="team-timer">{{item.start}}</p>
              </div>
              <div class="img-width">
                <img class="team-icon" src="../../common/img/group2.png" alt="">
              </div>
            </div>
            <div class="second">
              <div class="team" @click="handleClick(index2)" :class="{actives:index2 === tabactive}" v-for="(item2, index2) of aa[index]" :key="index2">
                <p>{{item.homeName}} {{item2[0]}}</p>
                <p>{{item2[2]}}</p>
              </div>
            </div>
            <shop @shop="shop"></shop>
          </div>
        </div>
      </slider>
    </div>
    <!-- 焦点赛事E -->

    <!-- 专家推荐S -->
    <div class="expert-recommend">
      <div class="recommend-title">
        <span>专家推荐</span>
      </div>
      <div class="recommend-contents" v-for="(item, index) of infoData" :key="index" @click="toRecommendDetail(item.id)">
        <div class="left-info">
          <p class="desc">{{item.desc}}</p>
          <p class="date">{{item.time}}</p>
        </div>
        <div class="right-img">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <!-- 专家推荐E -->
  </div>
</template>

<script>
import Slider from '@/components/slider'
import Shop from '@/components/shop'
export default {
  data () {
    return {
      recommends: [
        {
          linkUrl: 'https://www.baidu.com',
          picUrl: require('../../common/img/home/1.jpg')
        },
        {
          linkUrl: 'https://www.baidu.com',
          picUrl: require('../../common/img/home/2.jpg')
        },
        {
          linkUrl: 'https://www.baidu.com',
          picUrl: require('../../common/img/home/3.jpg')
        },
        {
          linkUrl: 'https://www.baidu.com',
          picUrl: require('../../common/img/home/4.jpg')
        }
      ],
      wrapperData: [
        {text: '天猫', icon: require('../../common/img/home/wrapper/tm.png')},
        {text: '聚划算', icon: require('../../common/img/home/wrapper/jhs.png')},
        {text: '天猫国际', icon: require('../../common/img/home/wrapper/tmgj.png')},
        {text: '外卖', icon: require('../../common/img/home/wrapper/wm.png')},
        {text: '天猫超市', icon: require('../../common/img/home/wrapper/tmcs.png')},
        {text: '充值中心', icon: require('../../common/img/home/wrapper/czzx.png')},
        {text: '飞猪旅行', icon: require('../../common/img/home/wrapper/fzlx.png')},
        {text: '领金币', icon: require('../../common/img/home/wrapper/ljb.png')},
        {text: '拍卖', icon: require('../../common/img/home/wrapper/pm.png')},
        {text: '分类', icon: require('../../common/img/home/wrapper/fl.png')},
      ],
      activeText: '拉开距离看见了家里        第三方第三方大幅度       发个电饭锅电饭锅非',
      activeData: [
        {
            homeName: '巴塞罗那',
            start: '04-23 13:50截止',
            awayName: '西汉姆联',
            result: ['胜', '平局', '负'],
            multi: [1.52, 4.23, 5.31]
          },
          {
            homeName: '法国',
            start: '04-23 13:50截止',
            awayName: '比利时',
            result: ['胜', '平局', '负'],
            multi: [1.52, 4.23, 5.31]
          }
      ],
      aa: [],
      comResult: [],
      comMulti: [],
      cc: true,
      tabactive: -1,
      infoData: [
        {
          id: '96441',
          desc: '周五003：阵容不整，曼城难敌多特水电费',
          time: '2018/1/5 18:35'
        },
        {
          id: '96442',
          desc: '周五003：阵容不整，曼城难敌多特水电费',
          time: '2018/1/5 18:35'
        },
        {
          id: '96443',
          desc: '周五003：阵容不整，曼城难敌多特水电费',
          time: '2018/1/5 18:35'
        },
        {
          id: '96444',
          desc: '周五003：阵容不整，曼城难敌多特水电费',
          time: '2018/1/5 18:35'
        }
      ]
    }
  },
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    // this.move(-1)
    this.serialize()
  },
  methods: {
    // 打开搜索背景
    openSearch () {
      console.log('1211')
    },

    // 活动文字滚动
    move (iSpeed) {
      let oUl = this.$refs.ul
      // let aLi = oUl.getElementsByTagName('li')
      let aLi = document.querySelector('li')
      // 复制一份
      // oUl.innerHTML += oUl.innerHTML
      // ul的宽度 = 第一个li的宽度 * li的个数
      oUl.style.width = aLi.offsetWidth+ 'px'

      this.timer = setInterval(function () {
        if (oUl.offsetLeft <= -oUl.offsetWidth / 2) {
          oUl.style.left = '0'
        }
        oUl.style.left = oUl.offsetLeft + iSpeed + 'px'
      }, 30)
    },

    // 处理比赛返回数据
    serialize () {
      this.activeData.forEach((item) => {
        let listResult = [],
            multis = [];

        // 比赛结果
        let results = item.result
        for (let i = 0; i < results.length; i++) {
          listResult.push(results[i])
        }
        this.comResult.push(listResult)

        // 倍率
        let multi = item.multi
        for (let i = 0; i < multi.length; i++) {
          multis.push(multi[i])
        }
        this.comMulti.push(multis)
      })
      this.aa = [...this.comResult, ...this.comMulti]
    },

    // 点击比赛切换
    handleClick (index) {
      this.tabactive = index
    },

    // 得到组件的总金额，传给后台
    shop (data) {
      console.log('总金额：' + data)
    },

    // 跳转到推荐详情
    toRecommendDetail (id) {
      this.$router.push({path: `/recommend-detail/${id}`})
    }
  },
  components: {
    Slider,
    Shop
  }
}
</script>

<style scoped lang="scss">
@import '../../common/css/public.sass';
.buy-color-wrap {
  width: 100%;
  font-size: $font14; /*no*/
  .sc-bxivhb {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    background-color: #FF852A;
    .header-bd {
      width: 100%;
      padding-right: 20px;
      padding-left: 84px;
      padding-top: 12px;
      padding-bottom: 12px;
      background-image: url('../../common/img/home/logo.png');
      background-repeat: no-repeat;
      background-size: 54px 40px;
      background-position: 18px center;
      .placeholder {
        display: block;
        font-size: 0;
        background-color: #FF4E22;
        text-align: center;
        border-radius: 8px;
        .text {
          position: relative;
          display: inline-block;
          height: 50px;
          line-height: 50px;
          font-size: $font14; /*no*/
          color: #F0E0DC;
          &::before {
            position: absolute;
            left: -36px;
            top: 8px;
            display: inline-block;
            content: "";
            width: 30px;
            height: 30px;
            color: #fff;
            background: url('../../common/img/home/search-c.png') no-repeat;
          }
        }
      }
    }
  }
  .slide-show {
    height: 100%;
    padding-top: 80px;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }

  /* 
    box-wrapper
  */
  .box-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    background: #fff;
    li {
      -webkit-box-flex: 0;
      flex: 0 0 20%;
      .block {
        display: flex;     
        align-items: center;       
        justify-content: center;
        flex-direction: column;
        padding: 12px 4px;
        box-sizing: border-box;
        font-size: $font12; /*no*/
        color: #222;
        .wrap-icon {
          width: 132px;
          height: 106px;
        }
        .wrapper-text {
          margin-top: 10px;
          color: #585656;
        }
      }
    }
  }

  /*
    活动文字
  */
  .notice {
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 70px;
    line-height: 70px;
    background: $white;
    .notice-text {
      display: block;
      /*width: 104px;*/
      /*height: 26px;*/
      /*background: url('../assets/img/win.png') no-repeat;*/
      /*background-size: 104px 26px;*/
    }
    .wrap {
      position: relative;
      width: 550px;
      height: 70px;
      overflow: hidden;
      margin: 0 auto;
      ul {
        position:absolute;
        height: 70px;
        line-height: 70px;
        li {
          float: left;
          // width: 200px;
          margin-right: 40px;
          height: 70px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: rgb(153, 153, 153)
        }
      }
    }
  }
  // 购彩tab
  .info-list {
    display: flex;
    text-align: center;
    margin: 20px; 
    .list-col {
      flex: 1;
      width: 3300px;
      height: 112px;
    }
    .racecolor {
      margin-left: 20px;
    }
    .lottery {
      background: url('../../common/img/football.png') no-repeat;
      background-size: contain;
    }
    .racecolor {
      background: url('../../common/img/single-pass.png') no-repeat;
      background-size: contain;
    }
  }
  // 焦点赛事
  .focus-event {
    width: 100%;
    overflow: hidden;
    background: $white;
    margin-top: 20px;
    .title {
      padding: 20px 0 0 40px;
      font-size: $font16; /*no*/
    }
    .live-content {
      padding: 18px 40px 60px;     
      .first {
        display: flex;       
        .img-width {
          flex: 1;
          .team-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }
        }
        .competition-time {
          flex: 2;
          .team-timer {
            margin-top: 20px;
          }
        }
      }
      .second {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .team {
          border: 1px solid #b5afaf; /*no*/
          border-radius: 8px;
          padding: 10px; 
          width: 25%;
        }
        .actives {
          border: 1px solid #ff0000; /*no*/
        }
      }
      
    }
  }
  // 专家推荐
  .expert-recommend {
    margin: 20px 0 140px;
    padding-bottom: 20px;
    background: $white;
    .recommend-title {
      padding: 20px 0 0;
      font-size: $font16; /*no*/
      span {
        border-left: 3px solid rgb(228, 57, 60); /*no*/
        border-radius: 3px;
        padding-left: 30px;
      }
    }
    .recommend-contents {
      margin: 40px 30px;
      padding: 0 0 25px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(248, 248, 248); /*no*/
      .left-info {
        margin-right: 20px;
        .desc {
          max-width: 470px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;    
          font-size: $font14; /*no*/
        }
        .date {
          font-size: $font12; /*no*/
          margin-top: 12px;
          color: rgb(153, 153, 153)
        }
      }
      .right-img {
        width: 200px;
        height: 120px;
        background: #afa4a4;
      }
    }
  }
}
</style>

