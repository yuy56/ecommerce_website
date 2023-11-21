import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav' 
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button,MessageBox } from 'element-ui'
//第一个参数：全局组件的名字;第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name, Button);
//elementUI注册组件的时候除了上面的，还有一种写法就是：挂载到原型身上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from '@/router'
Vue.config.productionTip = false

//引入仓库
import store from '@/store'

//引入MockServe.js---mock数据
import '@/mock/mockServe'
//引入swiper样式
import "swiper/css/swiper.css"

//统一接口api文件夹里面的全部请求函数
//统一引入
import * as API from '@/api'
import pic from '@/assets/pic.png'

//引入插件
import VueLazyload from 'vue-lazyload'
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认图
  loading:pic
})

//引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由信息：当在这里书写router的时候，会带有$router、$route属性
  router,
  //注册仓库:组件实例的身上会多一个属性$store属性   
  store
}).$mount('#app')
