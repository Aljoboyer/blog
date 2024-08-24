import { getAccessToken } from "../../helper/getAccessToken";
import { api } from "../api/api";

const blogApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
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


  }),
});

export const {
  useCreateBlogMutation,
} = blogApi;