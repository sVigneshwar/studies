import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://69025eecb208b24affe5f56b.mockapi.io/posts/'}),
    endpoints: builder => ({
        getPost: builder.query({
            query: () => 'post',
            providesTags: ["POSTS"]
        }),
        addPost: builder.mutation({
            query: (newData) => ({
                url: 'post',
                method: 'POST',
                body: newData
            }),
            invalidatesTags: ["POSTS"]
        })
    })
})

export const {useGetPostQuery, useLazyGetPostQuery, useAddPostMutation} = api;