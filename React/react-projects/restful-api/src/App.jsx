import React, { useEffect } from 'react'
import { fetchDataWithFetch, postDataWithFetch, fetchDataWithAxios, postDataWithAxios } from './services/ApiPractice'
import axios from 'axios'
import { axiosDefaultGet } from './services/axiosDefaults'
import { getPost, createPost } from './services/postService'

export default function App() {

  // useEffect(() => {
  //   fetchDataWithFetch();
  //   postDataWithFetch();
  //   fetchDataWithAxios();
  //   postDataWithAxios();
  // }, [])

  // useEffect(() => {
  //   axiosDefaultGet()
  // }, [])

  useEffect(() => {

    const fetchData = async () => {
      try{
        const posts = await getPost()       
        console.log("Data Fetched", posts.slice(0,3))

        const newPost = await createPost({title: "Vigneshwar posted with axios"})
        console.log("Data posted", newPost);
      }catch(err){
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      Restful api
    </div>
  )
}
