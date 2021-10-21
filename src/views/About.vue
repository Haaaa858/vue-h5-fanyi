<template>
  <div class="home">
    <PageHead qs-title="数据来源：WHO和霍普金斯大学网站"></PageHead>
    <div class="pageTab">
      <router-link to="/" active-class="active" class="tabTitle">国内疫情</router-link>
      <router-link to="/about" active-class="active" class="tabTitle">海外疫情</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PageHead from '@/components/PageHead.vue'; // @ is an alias to /src

@Options({
  components: {
    PageHead,
  },
})
export default class About extends Vue {}
</script>

<style lang="less">

</style>