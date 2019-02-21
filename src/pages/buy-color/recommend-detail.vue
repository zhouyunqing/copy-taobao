<template>
  <div class="recommend-detail">
    <navbar title="专家推荐"></navbar>
    <section class="article-area">
      <h1 class="article-title">{{articleData.title}}</h1>
      <h4 class="article-date">{{articleData.date}} {{articleData.source}}</h4>
      <div class="article-content">
        {{articleData.content}}
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { getLocalTime } from '@/common/js/timestamp.js'
export default {
  data () {
    return {
      articleData: {
        title: '圣诞节福利卡时间段',
        date: '',
        source: '多买彩票网',
        content: '胜利大街发牢骚的解放路口圣诞节福利卡时代峻峰水电费离开高科技和开个会可视对讲欧文哦是的那份'
      }
    }
  },
  methods: {
    getArticle () {
      let date = new Date().getTime()
      this.articleData.date = getLocalTime(date)
    }
  },
  mounted () {
    console.log(this.$route)
    this.getArticle()
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '../../common/css/public.sass';
.article-area {
  margin-top: 90px;
  padding: 0 30px;
  text-align: center;
  .article-title {
    padding-top: 60px;
    font-size: $font22; /*no*/
  }
  .article-date {
    margin-top: 20px;
    color: rgb(153, 153, 153);
    font-size: $font14; /*no*/
  }
  .article-content {
    margin-top: 40px;
    text-align: left;
    text-indent: 2.2em;
    font-size: $font16; /* no */
  }
}
</style>