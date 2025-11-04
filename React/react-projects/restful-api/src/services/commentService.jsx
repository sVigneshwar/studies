import { api } from "./api";

//get comments
export const getComments = async () => {
    try{
        const res = await api.get("/comments")
        console.log(res)
        return res.data
    }catch(err){
        throw err;
    }
}

//post comments
export const postComment = async (data) => {
    try{
        const res = await api.post("/comments", data)
        return res.data
    }catch(err){
        throw err;
    }
}

//patch comments
export const updateComment = async (id, data) => {
    try{
        const res = await api.patch(`/comments/${id}`, data)
        return res.data
    }catch(err){
        throw err;
    }
}

//delete comments
export const deleteComment = async (id) => {
    try{
        const res = await api.delete(`/comments/${id}`)
        return res.data
    }catch(err){
        throw err;
    }
}