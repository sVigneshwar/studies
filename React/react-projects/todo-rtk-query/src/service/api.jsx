import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_KEY} from './key'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: `https://${API_KEY}.mockapi.io/posts/`}),
    endpoints: builder => ({
        getTodo: builder.query({
            query: () => 'post',
            providesTags: ['Todo']
        }),
        addTodo: builder.mutation({
            query: (newData) => ({
                url: 'post',
                method: 'POST',
                body: newData
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `post/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todo']
        }),
        updateTodo: builder.mutation({
            query: ({id, newData}) => ({
                url: `post/${id}`,
                method: 'PUT',
                body: newData
            }),
            invalidatesTags: ['Todo']
        })
    })
})

export const {useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation} = api;