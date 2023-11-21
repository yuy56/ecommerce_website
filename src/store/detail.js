import { reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api"
//封装游客身份模块uuid--->生成一个随机字符串（生成一次之后不能再改变）
import {getUUID} from '@/utils/uuid_token'
const state={
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions={
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code==200){
            commit('GETGOODINFO',result.data)
        }
    },
    //将产品添加到购物车中｜｜修改某一个产品的个数
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        //代表服务器加入购物车成功
        if(result.code==200){
            return "ok"
        }else{
            //代表失败
            return Promise.reject(new Error('faile'))
        }
    }

}
const getters={
    categoryView(state){
        //比如：state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        //当前计算出的categoryView属性值至少是一个空对象，假的报错根本不会有了
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}