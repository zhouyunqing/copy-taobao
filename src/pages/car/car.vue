<template>
	<div class="car-wrap">
    <Button btnText="pc端体验瀑布流" type="primary" @click.native="toWaterFall"></Button>
  </div>
</template>

<script>
  import Button from '@/components/button'
	export default {
		data () {
			return {
				
			}
    },
    methods: {
      toWaterFall () {
        this.$router.push({'path': '/waterfall-flow'})
      }
    },
    components: {
      Button
    }
	}
</script>

<style scoped lang="scss">
.car-wrap {
  padding: 20px;
}
</style>