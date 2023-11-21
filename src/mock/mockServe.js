//引入mockjs模块
import Mock from 'mockjs'
//引入JSON数据格式【webpack默认暴露：图片\JSON数据格式】，所以不用写暴露就可以直接引入
import banner from './banner.json'
import floor from './floor.json'
import trade from './trade.json'

//mock数据：第一个参数请求地址，第二个参数请求数据
Mock.mock("/mock/banner",{code:200,data:banner})//模拟首页大轮播图
Mock.mock("/mock/floor",{code:200,data:floor})
Mock.mock("/mock/trade",{code:200,data:trade})