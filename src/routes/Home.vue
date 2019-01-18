<template>
    <div class="home-wpt">
        <Row :gutter="30">
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon icon-border"><Icon type="md-pulse" size="30" color='#003782' /></span>
                        <span class="sub-title pull-right">实时监测</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">当前在线车辆数</span>
                        <span class="number pull-right">{{ serverData.showTwo.onLineCarCount }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon icon-border"><Icon type="md-podium" size="30" color='#003782' /></span>
                        <span class="sub-title pull-right">持续统计中</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">系统总车辆数</span>
                        <span class="number pull-right">{{ serverData.showTwo.allCarCount }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon"><Icon type="md-speedometer" size="32" color='#003782' /></span>
                        <span class="sub-title pull-right">里程统计(KM)</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">车辆运行总里程</span>
                        <span class="number pull-right">{{ serverData.showTwo.totolMile }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon"><Icon type="md-time" size="32" color='#003782' /></span>
                        <span class="sub-title pull-right">总工作时长(HOUR)</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">车辆运行总时间</span>
                        <span class="number pull-right">{{ serverData.showTwo.totolTime }}</span>  
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            serverData:{
                "showOne": {
                    "userName": "admin"
                },
                "showTwo": {
                    "allCarCount": 98,
                    "onLineCarCount": 21,
                    "totolMile": "305435.91km",
                    "totolTime": "19774.9h"
                },
                "showThree": {
                    "usage": [{
                        "carCount": "4",
                        "usageName": "公交车"
                    }, {
                        "carCount": "6",
                        "usageName": "商务巴士"
                    }, {
                        "carCount": "1",
                        "usageName": "挖掘机"
                    }, {
                        "carCount": "8",
                        "usageName": "混凝土运输车"
                    }, {
                        "carCount": "1",
                        "usageName": "渣土车"
                    }, {
                        "carCount": "19",
                        "usageName": "物流车"
                    }, {
                        "carCount": "42",
                        "usageName": "环卫车"
                    }, {
                        "carCount": "12",
                        "usageName": "邮政车"
                    }],
                    "alarm": {
                        "allCarCount": 98,
                        "alarmCarCount": 87
                    }
                },
                "showFour": {
                    "yesterdayCarCount": 86,
                    "yesterdayRunMile": 9296.36,
                    "yesterdayRunTime": 532.39,
                    "monthCarCount": 41.93,
                    "monthRunMile": 3664.36,
                    "monthRunTime": 222.23
                },
                "showFive": [{
                    "keyID": "52",
                    "Content": "截止到2018年10月25日，平台共计接入车辆69辆。",
                    "CreateTime": "2018/10/26 15:43:43"
                }]
            }
        }
    }
}
</script>


<style scoped>
.home-wpt{
    padding: 14px 0;
}
.list-item{
    background: #fff;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    padding: 1.25rem;

}
.icon-border {
    border: 1px solid #073f87;
    border-radius: 50%;
    width: 31px;
    height: 31px;
    display: inline-block;
}
.sub-title {
    color: #cacaca;
    font-size: .8125rem;
}
.list-item-bottom{
    /* margin-top: 10px; */
}
.list-item .title {
    margin-top: .58rem;
    display: inline-block;
    font-size:  .9375rem;
}
.number {
    color: #003782;
    font-size: 1.3125rem;
    font-weight: 700;
}
</style>


