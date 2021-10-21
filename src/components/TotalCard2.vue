<template>
  <div class="totalCard2" :style="{'color': color}">
    <div class="subLabel">
      {{ subLabel }}
    </div>
    <div class="number">
      <span :style="{'color': color}">{{ number }}</span>
      <span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: "total-card2",
  props: {
    color: String,
    number: Number,
    subLabel: String,
    unit: String,
  }
})
</script>

<style lang="less">
.totalCard2 {
  width: 33%;
  position: relative;
  height: 128px;
  text-align: center;

  .subLabel {
    padding-top: 22px;
    color: #222;
    font-size: 22px;
    line-height: 24px;
  }

  .number {
    font-size: 44px;
    line-height: 44px;
    height: 44px;
    font-weight: 700;
    margin-top: 12px;

    .unit {
      font-size: 0.5em;
      margin-left: 4px;
    }
  }
}
</style>