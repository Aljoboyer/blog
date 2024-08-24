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
      invalidatesTags: ['bloglist'],
    }),

    getSingleBlog: builder.query({
      query: (blog_id) =>({
        url: `/blog/singleblog/${blog_id}`,
        method: 'GET',
      }),
      providesTags: ['bloglist'],
    }),


  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useLazyGetSingleBlogQuery
} = blogApi;