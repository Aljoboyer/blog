import { api } from "../api/api";

const userApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    userData: builder.query({
      query: (credentials) =>({
        url: 'merchant/profile',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${credentials?.accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['userinfo'],
    }),

    updatePassword: builder.mutation({
      query: (data ) => ({
        url: 'merchant/updatePassword',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${data?.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: data?.password,
      }),
      // invalidatesTags: ['userinfo'],
    }),

  }),
});

export const {
  useUserDataQuery,
  useUpdatePasswordMutation,
} = userApi;