import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)


//对外暴露VueRouter类的实例
let router = new VueRouter({
    //配置路由
    //第一：路径的前面需要有/（不是二级路由）
    //路径中单词都是小写的
    //component右侧v不能加引号【字符串：组件是对象（VueComponent类的实例）】
    routes,
    //滚动行为
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        //y：0代表滚动条在最上方
        return {y:0}
      }
})

import store from '@/store'
// 全局守卫：前置守卫（在路由跳转之间判断）
router.beforeEach(async(to,from,next)=>{
  //to:可以获取到你要跳转到哪个路由信息
  //from:可以获取到你从哪个路由来的信息
  //next:放行函数，next()放行，next(path)放行到指定路由，next(false)
  //用户登陆了，才会有token，未登陆一定不会有token
  let token = store.state.user.token
  //用户信息
  let name = store.state.user.userInfo.name
  //用户已经登陆了
  if(token){
    //用户已经登陆了还想去login【不能去，停留在首页】
    if(to.path=='/login'){
      next('/home')
    }else{
      //登陆，但去的不是login[home|search|detail|shopcar]
      //如果用户名已有
      if(name){
        next()
      }else{
        //没有用户信息,派发action让仓库存储用户信息再跳转
        try{
          //获取用户信息成功
          await store.dispatch('getUserInfo')
          next()
        }catch(error){
          //token失效了获取不到用户信息，重新登陆
          //清除token
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  }else{
    //未登陆:不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
    //未登陆去上面这些路由----登陆页面
    let toPath=to.path
    if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
      //把未登陆的时候想去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect='+toPath)
    }else{
      //去的不是上面这些路由（home|search|shopCart）---放行
      next()
    }
  }
})

export default router