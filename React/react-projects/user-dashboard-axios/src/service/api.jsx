import axios from "axios";

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})

api.interceptors.request.use(
    config => {
        const token = "Token"
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        console.log("Requested", config.url);
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    res => res,
    err => {
        if(err.response){
            const {status} = err.response
            if(status === 401){
                console.log("Unathurized access");
            }
            if(status === 403){
                console.log("Forbidden");
            }
            if(status === 404){
                console.log("Not found");
            }
        }else{
            console.log(err);
        }
        return Promise.reject(err)
    }
)