<template>
    <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import {mapState} from 'vuex'

export default {
    name: '',

    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },

    data() {
        return {
            
        };
    },

    mounted() {
        //派发action，获取floor组件的数据
        this.$store.dispatch("getFloorList")
    },

    methods: {
        
    },

    computed:{
        ...mapState({
            floorList:state=>state.home.floorList
        })
    }
};
</script>

<style lang="scss" scoped>

</style>