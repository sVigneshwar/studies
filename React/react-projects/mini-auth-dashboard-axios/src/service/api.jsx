import axios from 'axios';
import {store} from '../store/store'

export const api = axios.create({
    baseURL: "https://dummyjson.com/auth/",
    headers:{
        "Content-Type": 'application/json'
    },
    timeout: 5000
})


api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        console.log("Interceptor Request config", config.url)
        return config
    }, 
    error => {
        console.log("Interceptor Request error:", Error);
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        console.log("Interceptor Response Return", response);
        return response
    },
    error => {
        if(error.response){
            const {status} = error.response
            if(status === 401){
                console.log("401 Error, Invalid Request, Redirecting to login page");
                localStorage.removeItem("token")
                store.dispatch(updateToken(""))
            }
        }else{
            console.log("Unknown Error Occured!", error.response);
        }
        console.log("Interceptor Response error:", Error);
        return Promise.reject(error)
    }
)