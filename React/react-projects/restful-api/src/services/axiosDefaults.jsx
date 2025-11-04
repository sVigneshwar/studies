import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
axios.defaults.headers.common['Content-Type'] = "application/json"
axios.defaults.timeout = 5000


export const axiosDefaultGet = async () => {
    try{
        const res = await axios.get("/posts")
        console.log(res.data.slice(0,3));
    }catch(err){
        console.log(err.message)
    }
}