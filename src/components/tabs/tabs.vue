<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/buy-color">
      <div class="tab-icon for-color for-color-active"></div>
      <div class="tab-link">首页</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/car">
      <div class="tab-icon car-color car-color-active"></div>
      <div class="tab-link">购物车</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <div class="tab-icon mine-color mine-color-active"></div>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "tabs"
  }
</script>

<style lang="scss">
  @import "../../assets/scss/public.scss";
  .tab {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 96px;
    align-items: center;
    background: $white;
    font-size: $font16; /* no */
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: $font12; /*no*/
      .tab-link{
        padding-bottom: 10px;
      }
      &.router-link-active {
        .for-color-active {
          background: url('../../assets/img/tabs/for-color-active.png') no-repeat;
          background-size: contain;
        }
        .car-color-active {
          background: url('../../assets/img/tabs/car_active.png') no-repeat;
          background-size: contain;
        }
        .mine-color-active {
          background: url('../../assets/img/tabs/mine-active.png') no-repeat;
          background-size: contain;
        }
        .tab-link {
          color: #ff0000;
        }
      }    
      .tab-icon {
        width: 52px;
        height: 52px;
        margin: 6px auto;
      }
      .for-color {
        background: url('../../assets/img/tabs/for-color-gray.png') no-repeat;
        background-size: contain;
      }
      .car-color {
        background: url('../../assets/img/tabs/car.png') no-repeat;
        background-size: contain;
      }
      .mine-color {
        background: url('../../assets/img/tabs/mine-gray.png') no-repeat;
        background-size: contain;
      }
    }
  }
</style>