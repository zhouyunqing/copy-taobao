<template>
	<!-- 专家推荐S -->
    <div class="expert-recommend">
      <div class="recommend-title">
        <span>专家推荐</span>
      </div>
      <div class="recommend-contents" v-for="(item, index) of infoData" :key="index" @click="toRecommendDetail(item.id)">
        <div class="left-info">
          <p class="desc">{{item.desc}}</p>
          <p class="date">{{item.time | getLocalTime}}</p>
        </div>
        <div class="right-img">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <!-- 专家推荐E -->
</template>

<script>
	export default {
		data () {
			return {
				infoData: [
					{
						id: '96441',
						desc: '周五003：阵容不整，曼城难敌多特水电费',
						time: '1550108790000'
					},
					{
						id: '96442',
						desc: '周五003：阵容不整，曼城难敌多特水电费',
						time: 1550052023000
					},
					{
						id: '96443',
						desc: '周五003：阵容不整，曼城难敌多特水电费',
						time: 1550051874000
					},
					{
						id: '96444',
						desc: '周五003：阵容不整，曼城难敌多特水电费',
						time: 1550049978000
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../common/css/public.sass';
.expert-recommend {
	background: #ff0000;
    margin: 0 0 140px;
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
</style>