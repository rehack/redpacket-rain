import defaultUrl from '@/assets/packet.png'
import {sample,random} from 'lodash'

export default class RedPacket{
    // 构造器
    constructor(options){
        // 红包图片地址
        this.url = options.url || defaultUrl
        // 红包宽度
        this.width = options.width || '20vw'
        // 红包高度
        this.height = options.height || 'auto'
        // 红包轨道
        this.track = options.track || sample([0,20,40,60,80])
        // 红包最终旋转角度
        this.rotate = options.rotate || random(-360,360)
        // 红包最终掉落速度
        this.duration = options.duration || random(2.1,4.1)

        // 红包回调
        this.callback = options.callback
        // 红包放入哪个父容器
        this.parent = options.parent || document.body

        // new的时候就创建红包
        this.create()
    }

    // 方法
    create(){
        const img = document.createElement('img')
        img.src = this.url
        img.style.width = this.width
        img.style.height = this.height
        // 开启定位
        img.style.position = 'absolute'
        // 红包轨道
        img.style.left = this.track + 'vw'
        img.animate([
            {transform: 'translateY(-20vh) rotate(0)'},
            {transform: `translateY(120vh) rotate(${this.rotate}deg)`}
        ],{
            duration: this.duration * 1000,
            fill: 'forwards'
        })
        // 图片的回调
        img.ontouchstart = this.destory.bind(this,img)
        // 放入容器
        this.parent.appendChild(img)

        setTimeout(() => {
            img.remove()
        }, this.duration * 1000);
    }


    // 销毁
    destory(currentImg){
        // console.log(this);
        currentImg.remove()
        this.callback()
    }
}