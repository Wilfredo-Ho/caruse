<template>
  <div id="app">
    <Layout>
      <Header>
        <top-header></top-header>
        <tabs-menu></tabs-menu>
      </Header>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';
import TabsMenu from './components/TabsMenu';
import { flatMenu } from './config/menu';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    ...mapActions(['setActivePath', 'addMenuItem']),
  },
  watch:{
    $route(to,from){
      this.setActivePath(to.path);
    }
  },
  mounted () {
    let path = this.$router.history.current.path
    if (path !== '/') {
      this.addMenuItem(flatMenu.find(item => item.path === path))
    }
  },
  components: {
    TopHeader,
    TabsMenu
  }
}
</script>

<style>

/* 浮动 */
.pull-left{
  float: left;
}
.pull-right{
  float: right;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*+height:1%;}

.ivu-layout-header{
  height: 128px;
  padding: 0;
}
.ivu-layout-content{
  height: calc(100vh - 128px);
  max-height: calc(100vh - 128px);
  overflow-y: auto;
  background: rgb(236, 240, 245);
}
</style>
