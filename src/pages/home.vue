<template>
  <div class="home-wrap">
    <tab />
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '@/components/tabs'
import scale from '@/assets/js/scale'
export default {
  name: 'Home',
  mounted () {
    scale()
  },
  components: {
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
