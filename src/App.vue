<template>
  <div id="nav">
    <div class="hideScroll">
      <AppNav></AppNav>
    </div>
  </div>
  <div id="main">
    <router-view/>
  </div>
</template>

<style lang="less">
html, body {
  background-color: #fff;
  width: 100vw;
  height: 100%;
}

body {
  font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 32px;
  color: #222;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 100%;
  width: 750px;
  height: 100%;
}

p, h1, h2, h3, h4, h5 {
  margin: 0;
}

a {
  text-decoration: none;
}

table, tbody, td, th, thead, tr {
  border-collapse: collapse;
}

#app {
  padding-top: 88px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #fff;
  color: #2c3e50;
  width: 750px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%);
  min-height: 100%;
  margin: 0 auto;
  position: relative;
  transform-origin: center top;
  transition: all 0.3s;
}

#nav {
  z-index: 8;
  position: fixed;
  left: 0;
  top: 0;
  width: 750px;
  height: 88px;

  .hideScroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}

#main {
  width: 750px;
  overflow: hidden;
  padding-bottom: 170px;
}
</style>
<script>
import {defineComponent, onMounted, onUnmounted} from 'vue';
import AppNav from "@/components/AppNav";
import throttle from 'lodash.throttle';

export default defineComponent({
  components: {AppNav},
  setup() {
    const handleResize = throttle(() => {
      const innerWidth = window.innerWidth;
      if (innerWidth > 750) {
        document.getElementById("app").style.cssText = `transform: scale(${(750 / innerWidth).toFixed(6)});`
      } else {
        document.getElementById("app").style.cssText = "";
      }
    }, 50)
    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    })
  },
});
</script>