import {v4 as uuid} from 'uuid'

export default function getToken() {
    const token = localStorage.getItem('token')
    if(token){
        return token
    }else{
        const newToken = uuid()
        localStorage.setItem('token',newToken)
        return newToken
    }
}

