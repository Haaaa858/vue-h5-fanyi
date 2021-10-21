<template>
  <div class="timeTotal" >
    统计截至
    <span>{{totalTime}}</span>
    更新于
    <span>{{refreshTime}}</span>
    前
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    totalTime: String,
    refreshTime: String,
  }
})
export default class TimeTotal extends Vue {
  totalTime!: string
  refreshTime!: string
}
</script>

<style lang="less">
.timeTotal {
  text-align: left;
  padding: 40px 40px 30px 40px;
  background-color: #fff;
  line-height: 20px;
  font-size: 24px;
  color: #737373;
  span{
    font-weight: 500;
    color: #222;
  }
}
</style>