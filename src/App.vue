<template>
  <div>
    <Header> </Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home\Search是显示的，在登陆、注册是隐藏的 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    //通知Vuex发请求，获取三级商品分类数据，存储于仓库当中
    //比起写在组件里，这样只用获取一次
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>
