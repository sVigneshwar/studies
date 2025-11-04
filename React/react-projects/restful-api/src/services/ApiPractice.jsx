import axios from 'axios';
// https://jsonplaceholder.typicode.com/posts


export const fetchDataWithFetch = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        const data = await res.json()
        console.log("Fetched with Fetch", data)
    }catch(err){
        console.log(`Custom Error: ${err}`)
    }
    console.log("--------------------------------------------------------")
};
export const postDataWithFetch = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Vigneshwar Post with fetch"
            })
        })
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        const data = await res.json();
        console.log("Posted with Fetch", data)
    }catch(err){
        console.log(`Custom Error: ${err}`)
    }
    console.log("--------------------------------------------------------")
};
export const fetchDataWithAxios = async () => {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/postss")
        console.log("Fetched with Axios", res.data)
    }catch(err){
        console.log(`Custom Error: ${err.message}`)
    }
    console.log("--------------------------------------------------------")
};
export const postDataWithAxios = async () => {
    try{
        const res = await axios.post("https://jsonplaceholder.typicode.com/postss",{
            title: "Vigneshwar post with axios"
        })
        console.log("Posted with Axios", res.data)
    }catch(err){
        console.log(`Custom Error: ${err.message}`)
    }
    console.log("--------------------------------------------------------")
};