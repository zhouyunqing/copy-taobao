<template>
	<div class="car-wrap">
    <Button disabled btnText="pc端体验瀑布流" type="primary" @click.native="toEff('waterfall-flow')"></Button>
    <br>
    <Button btnText="递归树" disabled @click.native="toEff('tree')"></Button>
    <br>
    <Button btnText="移动端滑块" type="primary" @click.native="toEff('slider')"></Button>
    <br>
    <Cascade></Cascade>
  </div>
</template>

<script>
  import Button from '@/components/button'
  import Cascade from '@/components/cascade'
	export default {
		data () {
			return {
				
			}
    },
    methods: {
      toEff (path) {
        this.$router.push({'path': `/${path}`})
      }
    },
    components: {
      Button,Cascade
    }
	}
</script>

<style scoped lang="scss">
.car-wrap {
  padding: 20px;
}
</style>