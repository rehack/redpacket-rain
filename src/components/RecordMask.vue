<template>
    <van-overlay :show="isshow">
        <div class="wrapper">
            <div class="content">
                <span class="title">恭喜获得</span>
                <span class="amount">{{ amount }}</span>
                <span class="unit">元</span>
            </div>
            <van-icon name="close" class="close-icon" @click="close"/>
        </div>
    </van-overlay>
</template>

<script>
    export default{
        name: "RecordMask",
        props:['onClose'],
        data(){
            return {
                isshow:false,
                amount: 64
            }
        },
        methods:{
            show(amount){
                this.amount = amount
                this.isshow = true
            },
            close(){
                this.isshow = false
                this.onClose()
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: url('../assets/reward.png') no-repeat center/300px;
    .content{
        text-align: center;
        transform: translateY(-90px);
        .title{display: block;font-size: 30px;color: orange; font-weight: 600;margin-bottom: 10px;}
        .amount{font-size: 40px;color: red;font-weight: 600;}
        .unit{color: red;}
    }
    .close-icon{
        position: fixed;
        top: 10px;
        right: 10px;
        font-size: 40px;
        color: #fff;
    }
}
</style>