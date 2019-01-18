<template>
    <div ref='chart' :option="option" :loading='loading' :style="'width: 100%; height:' + height + 'px'"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/scatter'

import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
export default {
    name: 'Charts',
    props: {
        option: {
            required: true,
            type: Object,
        },
        loading: {
            required: false,
            type: Boolean,
            default: false
        },
        height: {
            required: true,
            type: Number,
            default: 100
        }
    },
    watch: {
        loading: {
            handle (newVal, oldVal) {
                if (newVal) {
                    this.chartInstance.hideLoading()
                    this.chartInstance.setOption(option, true)
                } else {
                    this.chartInstance.showLoading()
                }
            }
        }
    },
    data () {
        return {
            chartInstance: null
        }
    },
    mounted () {
        this.chartInstance = echarts.init(this.$refs.chart)
        this.chartInstance.showLoading()

        window.addEventListener(resize => {
            this.chartInstance.resize();
        })
    },
    beforeDestroy () {
        window.removeEventListener(resize => {
            this.chartInstance.resize();
        })
    }
}
</script>

