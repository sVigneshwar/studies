import { api } from "./api";

export const loginFormSubmit = async (formData) => {
    try{
        const res = await api.post("/login", formData)
        return res.data

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const loggedInData = async (accessToken) => {
    try{
        const res = await api.get("/me", accessToken)
        return res.data
    }catch(error){
        console.log(error);
        throw error;
    }
}