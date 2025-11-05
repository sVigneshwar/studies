import axios from "axios";

export const api2 = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})


api2.interceptors.request.use(
    (config) => {
        const token = "test"
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        console.log("Request send", config.url)

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error)
        
    }
)

api2.interceptors.response.use(
    response => {
        return response
    },
    error => {
        
        
      if(error.response){
        
        const {status} = error.response;
        if(status === 401){
            console.log("Unauthorize! return to login");
        } else if(status === 403){
            console.log("Forbidden you dont have access");
        }else if(status === 404){
            console.log("Not found");
        }
      } else{
        console.log("Some Error:", error.message);
      } 

      return Promise.reject(error)
    }
)