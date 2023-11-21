<template>
    <div class="swiper-container" id="floor1Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
            <!-- <div class="swiper-slide">
                <img src="./images/floor-1-b02.png">
            </div>
            <div class="swiper-slide">
                <img src="./images/floor-1-b03.png">
            </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'Carousel',
    props:['list'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    watch:{
        list:{
            //为什么watch监听不到list：因为这个数据从来没有发生变化（数据是父亲给的，父亲给的时候就是一个对象，对象里面该有的数据都是有的）
            //立即监听：不管数据有没有变化一开始就监听一次
            immediate:true,
            handler(){
                this.$nextTick(()=>{
                    var mySwiper = new Swiper ('.swiper-container', {
                        //direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项
                        
                        // 如果需要分页器
                        pagination: {
                        el: '.swiper-pagination',
                        },
                        
                        // 如果需要前进后退按钮
                        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                        
                        // 如果需要滚动条
                        scrollbar: {
                        el: '.swiper-scrollbar',
                        },
                    })        
                })
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>