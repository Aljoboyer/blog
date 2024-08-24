import { getAccessToken } from "../../helper/getAccessToken";
import { api } from "../api/api";

const blogApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () =>({
        url: '/blog/allblogs',
        method: 'GET',
      }),
      providesTags: ['bloglist'],
    }),

    createBlog: builder.mutation({
      query: (data ) => ({
        url: '/blog/publish',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          // 'Content-Type': 'application/json', 
        },
        body: data,
      }),
      invalidatesTags: ['bloglist', 'personalblogs'],
    }),

    getSingleBlog: builder.query({
      query: (blog_id) =>({
        url: `/blog/singleblog/${blog_id}`,
        method: 'GET',
      }),
      providesTags: ['bloglist'],
    }),

    getPersonalBlog: builder.query({
      query: (user_id) =>({
        url: `/blog/personalblogs/${user_id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`
        },
      }),
      providesTags: ['personalblogs'],
    }),

    updateBlog: builder.mutation({
      query: (data ) => ({
        url: '/blog/update',
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          // 'Content-Type': 'application/json', 
        },
        body: data,
      }),
      invalidatesTags: ['personalblogs'],
    }),

    deleteBlog: builder.mutation({
      query: (blog_id) => ({
        url: `/blog/delete/${blog_id}`,
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          // 'Content-Type': 'application/json', 
        },
      }),
      invalidatesTags: ['personalblogs'],
    }),

  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useLazyGetSingleBlogQuery,
  useLazyGetPersonalBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation
} = blogApi;