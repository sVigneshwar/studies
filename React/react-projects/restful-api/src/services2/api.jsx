import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000,
})

api.interceptors.request.use(
    config => {
        const token = "Test"
        if(token){
            config.headers.Authorization = `Beared ${token}`
        }

        console.log("Request sent", config.url);
        return config
    },
    err => {
        console.log(err);
        return Promise.reject(err)
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if(error.response){
            const {status} = error.response;

            if(status === 401){
                console.log("Unauthorized access");
            }
            if(status === 403){
                console.log("Forbidde!, you dont have access");
            }
            if(status === 404){
                console.log("Not Found");
            }
        }else{
            console.log(error);
        }
        return Promise.reject(error)
    }
)