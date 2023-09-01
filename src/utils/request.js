import axios from "axios"
import { Toast } from "vant"
import getToken from "./getToken"

const request = axios.create({
    baseURL: '/dev-api',
    timeout: 10000,

})

// 请求拦截器
request.interceptors.request.use(
    // 成功的回调
    config => {
        // console.log(config)
        config.headers.token = getToken()
        return config
    },
    // 失败的回调
    error => {
        Toast.fail(error.message)
        return Promise.reject(error.message) //继续传递错误
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        const {code, message } = response.data
        if(code === 200){
            return response.data
        }else{
            Toast.fail(message)
            return Promise.reject(message) //继续传递错误
        }

    },
    error => {
        Toast.fail(error.message)
        return Promise.reject(error.message) //继续传递错误
    }
)


export default request