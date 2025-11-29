import {createSlice} from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: builder => ({
        getUser: builder.query({
            query: () => '/users/1',
        }),
        addPost: builder.mutation({
            query: newData => ({
                url: '/users',
                method: 'POST',
                body: newData
            })
        })
    })
})

export const {useGetUserQuery , useAddPostMutation, useLazyGetUserQuery} = api;