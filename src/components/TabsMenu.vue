<template>
    <div class="tabs-menu-wpt">
        <Tabs type="card" closable @on-tab-remove="handleTabRemove" @on-click="handleTabClick">
            <TabPane 
                v-for='(item, index) in menu' 
                :key="index" 
                :label="item.title"
                :name="item.path"
                :closable="item.name !== 'home'"></TabPane>
        </Tabs>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'TabsMenu',
    computed: {
        ...mapGetters({
            menu: 'getMenu'
        }),
    },
    methods: {
        ...mapActions(['removeMenuItem']),
        handleTabRemove (path) {
            console.log(path)
        },
        handleTabClick (path) {
            this.$router.push(path);
        }
    },
    data () {
        return {

        }
    },
    mounted () {

    }
}
</script>

<style scoped>
.tabs-menu-wpt{
    height: 48px;
    line-height: 48px;
    background: #fff;
}
.tabs-menu-wpt >>> .ivu-tabs-nav-scroll{
    padding: 6px 0 0;
    margin: 0 40px;
}
.tabs-menu-wpt >>> .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
    border-color: #ccc;
    border-radius: 6px 6px 0 0;
    background: #f9f9f9;
    height: 41px;
    color: #073f87;
}
.tabs-menu-wpt >>>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{
    height: 42px;
    background: #ecf0f5;
    border-color: #ccc;
    color: #333;
}
.tabs-menu-wpt >>> .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container{
    height: 48px;
}
.tabs-menu-wpt >>> .ivu-tabs-nav-container{
    line-height: 2.3;
}
</style>