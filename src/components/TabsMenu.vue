<template>
    <div class="tabs-menu-wpt">
        <Tabs type="card" closable @on-tab-remove="handleTabRemove" @on-click="handleTabClick" :value="activeKey">
            <TabPane 
                v-for='(item) in menu' 
                :key="item.path" 
                :label="item.title"
                :name="item.path"
                :closable="item.path !== '/'"></TabPane>
        </Tabs>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'TabsMenu',
    computed: {
        ...mapGetters({
            menu: 'getMenu',
            activeKey: 'getActivePath',
            route: 'redirect'
        }),
    },
    methods: {
        ...mapActions(['removeMenuItem']),
        handleTabRemove (path) {
            if (this.activeKey === path) {
                this.$router.push(this.route(path));
            }

            this.removeMenuItem(path);
            
            // window.history.back()
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