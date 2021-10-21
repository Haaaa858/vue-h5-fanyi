import { createApp } from 'vue'
import App from './App.vue'
import { Icon, Tab,Tabs } from 'vant';
import ECharts from 'vue-echarts'
import router from './router'
import store from './store'
import { use } from 'echarts/core'
import chinaMap from '@/assets/china.json';
// 手动引入 ECharts 各模块来减小打包体积
import { registerMap } from 'echarts';

import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart,
    LineChart,
    MapChart
} from 'echarts/charts'
import {
    TitleComponent,
    LegendComponent,
    PolarComponent,
    GridComponent,
    TooltipComponent,
    VisualMapComponent,
    GeoComponent,
} from 'echarts/components'

registerMap("china", chinaMap as any);


use([
    LineChart,
    TitleComponent,
    LegendComponent,
    PolarComponent,
    CanvasRenderer,
    BarChart,
    MapChart,
    GridComponent,
    VisualMapComponent,
    GeoComponent,
    TooltipComponent
]);

// 全局注册组件（也可以使用局部注册）


const app = createApp(App)
app.component(Icon.name, Icon)
app.component(Tabs.name, Tabs)
app.component(Tab.name, Tab)
app.component('v-chart', ECharts)
app.use(store).use(router).mount('#app')
