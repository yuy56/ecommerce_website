import Home from '@/pages/Home'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
//import Search from '@/pages/Search/index.vue'
import Detail from '@/pages/Detail/index.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default[
    {
        path:"/center",
        component:Center,
        meta:{isShow:true},
        //二级路由组件
        children:[
            {
                path:"myorder",
                component:MyOrder
            },
            {
                path:"grouporder",
                component:GroupOrder
            },
            {
                path:"/center",
                redirect:"/center/myorder"
            }
        ]
    },
    {
        path:"/paysuccess",
        component:PaySuccess,
        meta:{isShow:true}
    },
    {
        path:"/pay",
        component:Pay,
        meta:{isShow:true},
        //路由独享守卫
        beforeEnter:(to,from,next)=>{
            //去交易页面，必须是从购物车而来
            if(from.path=="/trade"){
                next()
            }else{
                //其他的路由组件而来，停留在当前
                next(false)
            }
        }
    },
    {
        path:"/trade",
        component:Trade,
        meta:{isShow:true},
        //路由独享守卫
        beforeEnter:(to,from,next)=>{
            //去交易页面，必须是从购物车而来
            if(from.path=="/shopcart"){
                next()
            }else{
                //其他的路由组件而来，停留在当前
                next(false)
            }
        }
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{isShow:true}
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{isShow:true}
    },
    {
        path:"/detail/:skuId",
        component:Detail,
        meta:{isShow:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{isShow:true}
    },
    {
        path:"/login",
        component:Login,
        meta:{isShow:true}
    },
    {
        path:"/register",
        component:Register,
        meta:{isShow:false}
    },
    {
        path:"/search/:keyword?",
        name:"search",
        component:()=>import('@/pages/Search'),
        meta:{isShow:false},
        //布尔值写法：使得params参数作为路由组件上的一些属性
        //props:true
        //对象写法：额外的给路由组件传递一些props
        //props:{a:1,b:2}
        //函数写法：可以params参数，query参数，通过props传递给路由组件
        // props:($route)=>{
        //     return {keyword:$route.params.keyword,k:$route.query.k}
        // }
    },
    {
        //在项目跑起来的时候，访问到*，立马重定向到首页
        path:'/',
        redirect:'/home'
    }
]