import {v4 as uuidv4} from 'uuid'
export const getUUID = ()=> {
    //要生成一个随机字符串，且生成一次之后不变化（游客身份持久存储）
    //先从本地存储里面获取uuid（看一下是否有）
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    //如果没有则生成
    if(!uuid_token){
        //生成游客临时身份
        uuid_token=uuidv4()
        //本地存储存储一次
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}