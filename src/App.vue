<template>
    <div>
        <CountdownMask ref="countdownMask" :onFinish="onCountFinish"/>
        <div v-show="isShowRainContainer" class="rain-container" ref="rainContainer"></div>
        <RecordMask ref="recordMask" :onClose="onRecordClose"/>
    </div>
</template>

<script>

// import axios from 'axios'
import request from '@/utils/request';
import CountdownMask from './components/CountdownMask'
import RecordMask from './components/RecordMask'
import RedPacket from './class/RedPacket'

export default {
    name: 'App',
    components:{CountdownMask,RecordMask},
    data(){
        return {
            isShowRainContainer: false,
            rainKey: '' //红包雨的唯一标识，从服务器获取
        }
    },
    methods: {
        // 倒计时结束回调
        onCountFinish(){
            // console.log(13);
            this.createRain(5000,200)
        },
        onRecordClose(){
            console.log('close');
        },
        // 点击红包的回调
        onClickRedPacket(){
            console.log('点击了红包')
            request.get(`api/v2/rob/${this.rainKey}`)
        },
        // 下完雨
        async onRainEnd(){
            // 显示红包结果
            const {data} = await request.get(`api/v2/record/${this.rainKey}`)
            this.$refs.recordMask.show(data)
        },
        createRain(duration,speed){
            // 显示下雨容器
            this.isShowRainContainer = true
            // 下红包雨
            this.timer = setInterval(() => {
                new RedPacket({
                    parent: this.$refs.rainContainer,
                    callback: this.onClickRedPacket //不要直接写回调函数，性能不好
                })
            }, speed);
            // 开启延迟定时器-停止下雨
            setTimeout(() => {
                clearInterval(this.timer)
                this.onRainEnd()
            }, duration);
        },

        async start(){
            const {data} = await request.get('api/v1/send/10000/20') //创建一场红包雨
            this.rainKey = data //存储红包雨唯一标识

            // 开启倒计时
            this.$refs.countdownMask.show(3500) 
            // console.log(data);
        }
    },
    mounted(){
           
        this.start()
        
    }
}
</script>

<style lang="scss" scoped>
.rain-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(180deg,rgb(244, 206, 135),orange);
    overflow: hidden;
}
</style>
 