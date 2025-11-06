import axios from 'axios';

export const api = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Beared ${token}`
        }
        console.log("Request sent", config.url)
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response){
            const {status} = error.response
            if(status === 400){
                console.log("Invalid credentials");
            }
            if(status === 401){
                console.log("unathorized access");
                localStorage.removeItem("token");
            }
            if(status === 403){
                console.log("forbidden");
            }
            if(status === 404){
                console.log("Not found");
            }
        }else{
            console.log("Something went wrong")
        }
        return Promise.reject(error)
    }
)