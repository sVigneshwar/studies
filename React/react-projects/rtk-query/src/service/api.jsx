import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { key } from './key'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({baseUrl: `https://${key}.mockapi.io/`}),
  endpoints: builder => ({
    getPost: builder.query({
      query: () => 'posts/post',
      providesTags: ['Posts']
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `posts/post/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Posts']
    }),
    addPost: builder.mutation({
      query: newPost => ({
        url: `posts/post/`,
        method: "POST",
        body: newPost
      }),
      invalidatesTags: ['Posts']
    })
  })
})

export const {useGetPostQuery,useDeletePostMutation, useAddPostMutation} = postAPI