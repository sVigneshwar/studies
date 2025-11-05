import React, { useEffect } from 'react'
import { fetchDataWithFetch, postDataWithFetch, fetchDataWithAxios, postDataWithAxios } from './services/ApiPractice'
import axios from 'axios'
import { axiosDefaultGet } from './services/axiosDefaults'
import { getPost, createPost } from './services/postService'
import {getComments, postComment, updateComment, deleteComment} from './services/commentService'
import { api2 } from './services/api2'

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

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try{
  //       const posts = await getPost()       
  //       console.log("Data Fetched", posts.slice(0,3))

  //       const newPost = await createPost({title: "Vigneshwar posted with axios"})
  //       console.log("Data posted", newPost);
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   const handleComments = async () => {
  //     const comments = await getComments()
  //     console.log(comments.slice(0,3))

  //     const newComment = await postComment({postID: 1, name: "new comment added"})
  //     console.log(newComment)

  //     const updatedComment = await updateComment(1, {name: "updated comment name"})
  //     console.log(updatedComment)

  //     const deletedComment = await deleteComment(2)
  //     console.log(deletedComment)
  //   }
  //   handleComments()
  // }, [])

  // useEffect(() => {
  //   api2.get("/userss")
  //     .then(res => console.log(res.data))
  // }, [])

  return (
    <div>
      Restful api
    </div>
  )
}
