<template>
  <div class="total-card" :style="{'background-color': alphaColor}">
    <div class="subLabel">
      {{ subLabel }}
      <span :style="{'color': color}">
         <span>{{ subNumber >= 0 ? "+" : "" }}</span>
        {{ subNumber }}
      </span>
    </div>
    <div class="number">
      <span :style="{'color': color}">{{ number }}</span>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {fade} from '@/utils/colors';

export default defineComponent({
  name: "total-card",
  props: {
    color: String,
    number: Number,
    label: String,
    subNumber: Number,
    subLabel: String,
  },
  computed: {
    alphaColor(): string {
      return fade(this.color!, 0.05);
    }
  }
})
</script>

<style lang="less">
.total-card {
  width: 222px;
  margin: 0 4px 4px 0;
  padding: 12px 0 24px;
  position: relative;
  text-align: center;

  .subLabel {
    padding-top: 12px;
    color: #7c7c7c;
    font-size: 20px;
    line-height: 20px;
    height: 20px;
    font-weight: 500;
  }

  .number {
    font-size: 44px;
    line-height: 44px;
    height: 44px;
    font-weight: 600;
    padding-top: 12px;
  }

  .label {
    font-size: 24px;
    height: 24px;
    line-height: 24px;
    color: #222;
    font-weight: 500;
    margin-top: 12px;
  }
}
</style>