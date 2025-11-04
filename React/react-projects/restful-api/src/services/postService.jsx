import { api } from "./api";

export const getPost = async () => {
    try{
        const res = await api.get("/posts")
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const createPost = async (data) => {
    try{
        const res = await api.post("/posts", data)
        return res.data;
    }catch(err){
        console.log(err)
        throw err
    }
}