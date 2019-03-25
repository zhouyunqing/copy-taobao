<template>
    <div class="water-fall">
        <div class="single-waterfull" ref="lis" v-for="(item, index) in flowList" :key="index">
            <img :src="item.url" alt="">
        </div>
    </div>
</template>

<script>
import { flowPic } from '@/pages/experence-effect/waterfall-flow/json/pic.js'
export default {
    data () {
        return {
            flowList: flowPic
        }
    },
    mounted () {
        this.waterFull()
    },
    methods: {
        // 瀑布流
        waterFull () {
            let oWidthArr = this.$refs.lis,
                oWidth = null;
            return new Promise((resolve) => {
                setTimeout(() => {    
                    oWidthArr.forEach(element => {
                        oWidth = element.offsetWidth    // 获取到每张图片的宽度
                    });
                    resolve(oWidth)
                }, 300)
            }).then(res => {
                this.computeFall(oWidthArr, res)
            })     
        },

        computeFall (el,data) {
            let heightArr = [];                 // 图片的高度
            let scrollW = window.screen.width       // 获取浏览器屏幕物理分辨率的宽
            let cols = parseInt(scrollW / data)               // 计算每行能展示多少个

            el.forEach((item, index) => {
                let boxH = item.offsetHeight        // 每张图片的高度
                if (index < cols) {
                    // 当下标小于列数时
                     heightArr[index] = boxH
                } else {
                    let minBoxHeight = Math.min.apply(this, heightArr)     
                    let minBoxIndex = null 
                    heightArr.forEach((item, index) => {
                        if(minBoxHeight == item){           
                            minBoxIndex =  index            // 取到当前高度对应的下标
                        }
                    })
                    
                    // 定位
                    item.style.position = 'absolute'
                    item.style.top = minBoxHeight + 'px'               // 最小高度
                    item.style.left = minBoxIndex * data + 'px'                // 最小索引+图片宽度

                    heightArr[minBoxIndex] += boxH
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.water-fall {
    padding-top: 20px;
    .single-waterfull {
        float: left;
        padding-left: 20px;
    }
}
</style>

