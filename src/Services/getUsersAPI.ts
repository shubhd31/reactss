import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, ListResponse } from './types'



export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    listPosts: builder.query<ListResponse<Post>, number | void>({
      query: (page = 1) => `users?page=${page}`,
    }),

  }),

})



export const { useListPostsQuery } = api
