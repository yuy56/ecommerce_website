import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
//home模块的小仓库
const state = {
    //home仓库中存储三级菜单的数据
    //state中数据默认初始值别随便写，服务器返回对象写对象，服务器返回的是数组写数组
    categoryList:[],
    //轮播图的数据
    bannerList:[],
    floorList:[]
}
const mutations = {
    //mutations是唯一修改state的地方
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
//actions是用户处理派发actions的地方，可以书写异步语句、自己逻辑的地方
const actions = {
    //通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
       let result = await reqGetBannerList()
       if(result.code==200){
            commit('GETBANNERLIST',result.data)
       }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code==200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
//计算属性
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}