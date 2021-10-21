<template>
  <div class="expandMore">
    <span>
      展开更多
      <van-icon name="arrow-down"/>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "expand-more",
})
</script>

<style lang="less">
.expandMore {
  text-align: center;

  span {
    display: inline-block;
    padding: 12px 0 12px 0;
    position: relative;
    line-height: normal;
    font-size: 24px;
  }
}
</style>