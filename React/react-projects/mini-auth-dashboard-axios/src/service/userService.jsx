import {api} from './api'

export const loginUser = async (credentials) => {
    try{

        const res = await api.post("/user/login", credentials);

        const {token, user} = res.data

        localStorage.setItem("token", token);
        return user;

    }catch(error){
        throw error.response?.data?.message || "Login Failed";
    }
}

// export const getProfile