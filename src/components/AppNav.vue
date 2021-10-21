<template>
  <div class="navTabs view">
    <router-link to="/" active-class="active" class="logo"></router-link>
    <router-link to="/" active-class="active" class="item">国内疫情</router-link>
    <router-link to="/about" active-class="active" class="item">海外疫情</router-link>
    <router-link to="/quanqui" active-class="active" class="item">全球疫苗</router-link>
    <router-link to="/gongjx" active-class="active" class="item">工具箱</router-link>
    <router-link to="/hs" active-class="active" class="item">核酸检测</router-link>
    <router-link to="/gj" active-class="active" class="item">病患轨迹</router-link>
    <router-link to="/fengkong" active-class="active" class="item">封控地区</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({})
</script>



<style lang="less">
.navTabs{
  height: 120px;
  padding: 0 20px;
  z-index: 9;
  display: flex;
  justify-content: left;
  overflow: auto;
  width: 710px;
  background-color: #005dff;
  .logo{
    flex-shrink: 0;
    height: 88px;
    background-image: url("../assets/logo.png");
    width: 152px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .item{
    &.active{
      color: #fff;
      font-weight: 500;
    }
    text-decoration: none;
    padding: 0 20px;
    line-height: 88px;
    text-align: center;
    font-size: 32px;
    position: relative;
    flex-shrink: 0;
    color: hsla(0,0%,100%,.7);
  }
}
.view{
  transition: all .6s cubic-bezier(.55,0,.1,1);
  transform: translateZ(0);
}
</style>