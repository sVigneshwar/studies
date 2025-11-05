import { api } from "./api";

export const getUsers = async () => {
    try{
        const res = await api.get("/users")
        return res.data
    }catch(err){
        throw err
    }
}

export const postUsers = async (data) => {
    try{
        const res = await api.post("/users", data)
        return res.data
    }catch(err){
        throw err
    }
}