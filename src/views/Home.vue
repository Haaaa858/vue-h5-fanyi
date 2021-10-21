<template>
  <div class="home">
    <PageHead qs-title="数据来源：国家及各地卫健委每日信息发布"/>
    <div class="pageTab">
      <router-link to="/" active-class="active" class="tabTitle">国内疫情</router-link>
      <router-link to="/about" active-class="active" class="tabTitle">海外疫情</router-link>
    </div>
    <TimeTotal refresh-time="23分钟" total-time="2021-10-18 13:56:44"/>
    <div class="total-cardWrapper">
      <total-card number="57" sub-number="7" sub-label="较上日" label="本土现有确诊" color="#e57631"/>
      <total-card number="2370" sub-number="-2" sub-label="较上日" label="现有确诊" color="#e61c1d"/>
      <total-card number="125259" sub-number="33" sub-label="较上日" label="累计确诊" color="#be2121"/>
      <total-card number="360" sub-number="9" sub-label="较上日" label="无症状感染者" color="#ae3ac6"/>
      <total-card number="9422" sub-number="22" sub-label="较上日" label="境外输入" color="#4e8be6"/>
      <total-card number="5695" sub-number="0" sub-label="较上日" label="累计死亡" color="#4e5a65"/>
    </div>
    <div class="chinaNow">
      <h2>近期31省区市本土病例</h2>
      <table>
        <thead>
        <tr>
          <td>城市(区)</td>
          <td>省市区</td>
          <td>新增</td>
          <td>现有确诊</td>
          <td>区域风险</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in rows" :key="item.city">
          <td>{{ item.city }}</td>
          <td>{{ item.province }}</td>
          <td :style="item.add>0 ?{color: '#e57631'}: {}">{{ item.add }}</td>
          <td>{{ item.now }}</td>
          <td>{{ item.level }}</td>
        </tr>
        </tbody>
      </table>
      <expand-more v-if="!expand" v-on:click="changeExpand"/>
    </div>
    <div class="yimiaoTop">
      <div class="title">
        <h2>国内新冠疫苗接种追踪</h2>
      </div>
      <div class="list">
        <total-card2 number="22.3" unit="亿剂" sub-label="累计接种" color="#178b50"/>
        <total-card2 number="152.1" unit="万剂" sub-label="较上日新增" color="#e57631"/>
        <total-card2 number="155.08" unit="剂" sub-label="每百人接种" color="#4e5a65"/>
      </div>
    </div>
    <van-tabs type="card" class="area-tab">
      <van-tab title="现有确诊">
        <v-chart :option="polar" class="chartWrapper" autoresize/>
      </van-tab>
      <van-tab title="累计确诊">
        <v-chart :option="polar" class="chartWrapper" autoresize/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageHead from '@/components/PageHead.vue'; // @ is an alias to /src
import TotalCard from '@/components/TotalCard.vue'; // @ is an alias to /src
import TotalCard2 from '@/components/TotalCard2.vue'; // @ is an alias to /src
import TimeTotal from '@/components/TimeTotal.vue'; // @ is an alias to /src
import ExpandMore from '@/components/ExpandMore.vue';

export default defineComponent({
  components: {
    PageHead,
    TotalCard,
    TotalCard2,
    TimeTotal,
    ExpandMore,
  },
  data() {
    return {
      polar: {
        tooltip: {
          triggerOn: "click",
          formatter: function(e:any) {
            return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [{
            gt: 100,
            label: "> 100 人",
            color: "#7f1100"
          }, {
            gte: 10,
            lte: 100,
            label: "10 - 100 人",
            color: "#ff5428"
          }, {
            gte: 1,
            lt: 10,
            label: "1 - 9 人",
            color: "#ff8c71"
          }, {
            gt: 0,
            lt: 1,
            label: "疑似",
            color: "#ffd768"
          }, {
            value: 0,
            color: "#ffffff"
          }],
          show: !0
        },
        geo: {
          map: "china",
          roam: !1,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.23,
          top: 120,
          label: {
            normal: {
              show: !0,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [{
          name: "确诊病例",
          type: "map",
          geoIndex: 0,
          data: [{
            name: "南海诸岛",
            value: 0
          },
            {
              name: '北京',
              value: 54
            },
            {
              name: '天津',
              value: 13
            },
            {
              name: '上海',
              value: 40
            },
            {
              name: '重庆',
              value: 75
            },
            {
              name: '河北',
              value: 13
            },
            {
              name: '河南',
              value: 83
            },
            {
              name: '云南',
              value: 11
            },
            {
              name: '辽宁',
              value: 19
            },
            {
              name: '黑龙江',
              value: 15
            },
            {
              name: '湖南',
              value: 69
            },
            {
              name: '安徽',
              value: 60
            },
            {
              name: '山东',
              value: 39
            },
            {
              name: '新疆',
              value: 4
            },
            {
              name: '江苏',
              value: 31
            },
            {
              name: '浙江',
              value: 104
            },
            {
              name: '江西',
              value: 36
            },
            {
              name: '湖北',
              value: 1052
            },
            {
              name: '广西',
              value: 33
            },
            {
              name: '甘肃',
              value: 7
            },
            {
              name: '山西',
              value: 9
            },
            {
              name: '内蒙古',
              value: 7
            },
            {
              name: '陕西',
              value: 22
            },
            {
              name: '吉林',
              value: 4
            },
            {
              name: '福建',
              value: 18
            },
            {
              name: '贵州',
              value: 5
            },
            {
              name: '广东',
              value: 98
            },
            {
              name: '青海',
              value: 1
            },
            {
              name: '西藏',
              value: 0
            },
            {
              name: '四川',
              value: 44
            },
            {
              name: '宁夏',
              value: 4
            },
            {
              name: '海南',
              value: 22
            },
            {
              name: '台湾',
              value: 3
            },
            {
              name: '香港',
              value: 5
            },
            {
              name: '澳门',
              value: 5
            }
          ]
        }]
      },
      allRows: [
        {city: "西安", province: '陕西', add: 6, now: 6, level: '全部低风险'},
        {city: "银川", province: '宁夏', add: 1, now: 1, level: '全部低风险'},
        {city: "锡林郭勒", province: '内蒙古', add: 0, now: 2, level: '全部低风险'},
        {city: "哈尔滨", province: '黑龙江', add: 0, now: 6, level: '全部低风险'},
        {city: "厦门", province: '福建', add: 0, now: 32, level: '全部低风险'},
        {city: "莆田", province: '福建', add: 0, now: 8, level: '全部低风险'},
        {city: "漳州", province: '福建', add: 0, now: 3, level: '全部低风险'},
        {city: "商丘", province: '河南', add: 0, now: 4, level: '全部低风险'},
        {city: "郑州", province: '河南', add: 0, now: 4, level: '全部低风险'},
        {city: "驻马店", province: '河南', add: 0, now: 4, level: '全部低风险'},
        {city: "开封", province: '河南', add: 0, now: 6, level: '全部低风险'},
        {city: "许昌", province: '河南', add: 0, now: 1, level: '全部低风险'},
        {city: "安阳", province: '河南', add: 0, now: 1, level: '全部低风险'},
        {city: "中山", province: '广东', add: 0, now: 1, level: '全部低风险'},
        {city: "宜宾", province: '四川', add: 0, now: 1, level: '全部低风险'},
      ],
      expand: false,
    }
  },
  computed: {
    rows(): any {
      return this.expand ? this.allRows : this.allRows.slice(0, 10);
    }
  },
  methods: {
    changeExpand() {
      this.expand = !this.expand;
    }
  },
})

</script>

<style lang="less">

.pageTab {
  height: 84px;
  background-color: #ddecff;
  border-radius: 24px 24px 0 0;
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: space-between;

  .tabTitle {
    &.active {
      color: #005dff;
      background-color: #fff;
      font-weight: 400;
      z-index: 2;
    }

    width: 50%;
    height: 100%;
    line-height: 84px;
    font-size: 32px;
    color: #445063;
    text-align: center;
    position: relative;
  }
}

.total-cardWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  .total-card:first-child {
    border-top-left-radius: 12px;
  }

  .total-card:nth-child(3) {
    border-top-right-radius: 12px;
    margin-right: 0;
  }

  .total-card:nth-child(4) {
    border-bottom-left-radius: 12px;
  }

  .total-card:nth-child(6) {
    border-bottom-right-radius: 12px;
    margin-right: 0;
  }
}

.chinaNow {
  margin: 20px 40px 30px 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #222;
    line-height: 36px;
    position: relative;
    margin: 0;
    text-align: left;
  }

  table {
    margin-top: 20px;
    width: 100%;

    thead td {
      &:first-child {
        border-top-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
      }

      height: 64px;
      line-height: 64px;
      text-align: center;
      background-color: #eef4ff;
      color: #4180f1;
      font-size: 24px;
      border-right: 1px solid #fff;
    }

    tbody td {
      line-height: 32px;
      padding: 22px 0;
      text-align: center;
      border-bottom: 1px solid #f5f5f5;
      font-size: 24px;
    }
  }
}

.yimiaoTop {
  margin: 18px 40px 0;
  border: 1px solid #efefef;
  border-radius: 12px;

  .title {
    line-height: 32px;
    margin: 28px 28px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 28px;
      color: #222;
      font-weight: 500;
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 4px;
  }
}

.area-tab {
  margin: 30px 0 20px 0;

  .van-tabs__nav {
    width: 300px;
    height: 45px;
    margin-left: 40px;
    border: 0;

    .van-tab {
      &:first-child {
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }

      &.van-tab--active {
        background-color: #eef4ff;
        border-color: #ccdeff;
        color: #005dff;
        z-index: 2;
      }

      color: #222;
      display: block;
      line-height: normal;
      text-align: center;
      font-size: 24px;
      padding: 6px 0;
      border: 1px solid #efefef;
      float: left;
      position: relative;
    }
  }
}

.chartWrapper{
  margin: 0 auto;
  width: 700px;
  height: 600px;
}
</style>