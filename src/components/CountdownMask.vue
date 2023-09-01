<template>
    <van-overlay :show="isshow">
        <div class="wrapper">
            <van-count-down v-if="isshow" :time="time" v-slot="{seconds}" @finish="finish">
                <span class="seconds"> {{ seconds }}</span>
            </van-count-down>
        </div>
    </van-overlay>
        
</template>

<script>
    export default{
        props:["onFinish"],
        name: "CountdownMask",
        data(){
            return {
                isshow:false,
                time: 3500
            }
        },
        methods:{
            show(time=3500){
                this.isshow = true
                this.time = time
            },
            finish(){
                this.isshow = false
                this.onFinish()
            },
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.seconds{
    font-size: 80px;
    color: orange;
}

</style>