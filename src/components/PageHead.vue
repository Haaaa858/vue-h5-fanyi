<template>
  <div>
    <div class="viewHead">
      <p class="logo"/>
      <p class="title"/>
      <p class="qs">{{ qsTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
@Options({
  props: {
    qsTitle: String,
  }
})
export default class PageHead extends Vue {
  sqTitle!: string
}
</script>

<style lang="less">
.viewHead {
  height: 306px;
  background-size: cover;
  position: relative;

  &:before {
    content: ".";
    font-size: 0;
    line-height: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 364px;
    background: url(../assets/head_bg.png) top;
    background-size: cover;
  }

  .logo {
    position: absolute;
    left: 40px;
    top: 38px;
    width: 160px;
    height: 36px;
    background: url(../assets/head_logo.png);
    background-size: 100% 100%;
  }

  .title {
    width: 380px;
    height: 124px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 112px;
    background: url(../assets/head_title.png);
    background-size: 100% 100%;
  }

  .qs {
    line-height: 28px;
    height: 28px;
    font-size: 24px;
    color: #fff;
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 30px;
    text-align: center;
  }
}

</style>