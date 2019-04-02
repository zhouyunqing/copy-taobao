<template>
  <div>
    <navbar title="电影"></navbar>
    <keep-alive>
      <scroll v-if="list" class="wrapper"
        ref="pullrefresh"
        :pullup="isShow"
        :pulldown="isShow"
        @pulldown="loadDemo"
        @scrollToEnd="loadUp"
        :listenScroll="listenScroll"
        @scroll="listScroll">
          <div class="pic flex" v-for="(movie, index) in list" :key="index" @click="toDetail(movie.id)">
            <img class="img-responsive" v-lazy="movie.images.small" />
            <div class="caption ml10">
              <!--:title为v-bind的缩写 旨在获取API中的title值赋给title属性-->
              <h3 class="h4 text-center" :title="movie.title">{{movie.title}}</h3>
              <div class="flex">类型：<p class="mr10" v-for="(type,index) in movie.genres" :key="index">{{type}}</p></div>
              <p>评分：{{movie.rating.average}}</p>
              <div class="flex">导演：<p v-for="(director,index) in movie.directors" :key="index">{{director.name}}</p></div>
              <div class="flex wrap jus-sb">主演：<span v-for="(star,index) in movie.casts" :key="index">{{star.name}}</span></div>
              <p class="m-time">上映时间：<span class="text-success">{{movie.year}}</span></p>
            </div>
          </div>
      </scroll>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Scroll from '@/components/scroll'

export default {
  data () {
    return {
      isShow: true,
      listenScroll: true,
      list: [],
      page: 1,
      y: '',
      pageSize: 20
    }
  },
  created () {
    this._getDataInfo()
  },
  methods: {
    loadDemo () {
      this.$refs.pullrefresh.$emit('pullrefresh.finishLoad')
      this._getDataInfo(1)
    },
    loadUp () {
      if (!this.page) return
      this.page++
      //上拉加载重新初始化
      this.$refs.pullrefresh.$emit('infinitescroll.reInit')
      this._getDataInfo(this.page)
    },
    _getDataInfo(page=1){
      this.$axios.get(`/api/movie/in_theaters?start=${page}&count=${this.pageSize}`)
        .then((res) => {
          if (res.data.count >= 10) {
            let listData = res.data.subjects
            this.list.push(...listData)
            //单次请求数据加载完毕后
            this.$refs.pullrefresh.$emit('infinitescroll.finishLoad')
          } else {
            //把page设置成false 数据已经加载完毕了 不用在加载了
            this.page = false
            //所有数据加载完毕后
            this.$refs.pullrefresh.$emit('infinitescroll.loadedDone')
          }
        })
    },
    // 监听滚动距离
    listScroll (pos) {
      console.log(pos)
      this.y = pos.y
    },
    // 跳转到详情
    toDetail (id) {
      sessionStorage.setItem('pos', this.y);
      this.$router.push({path: `/movie-detail/${id}`})
    },
    sleep: (time)=> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }
  },
  mounted () {
    (async () => {
      await this.sleep(1000);//阻塞该async方法的执行线程，直到sleep()返回的Promise resolve
      let scrollY = sessionStorage.getItem('pos')
      this.$refs.pullrefresh.scrollTo(0, scrollY, 600)
    })()
  },
  components: {
    Navbar,
    Scroll
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    position: fixed;
    top: 90px;
    bottom: 0;
  }
  .flex {
    display: flex
  }
  .jus-sb {
    justify-content: space-between;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .pic {
    margin-bottom: 30px;
  }
  .img-responsive {
    width: 220px;
    height: 200px
  }
</style>