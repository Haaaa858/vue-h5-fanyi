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
body {
  margin: 0
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
  box-shadow: 0 0 3px rgb(0 0 0 / 10%);
  min-height: 100%;
  margin: 0 auto;
  position: relative;
  transform-origin: center top;
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
import {defineComponent} from 'vue';
import AppNav from "@/components/AppNav";

export default defineComponent({
  components: {AppNav},
});
</script>