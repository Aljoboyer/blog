import { api } from "../api/api";

const authApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data ) => ({
        url: '/user/signup',
        method: 'POST',
        body: data,
      }),
    //   invalidatesTags: [''],
    }),
    logIn: builder.mutation({
      query: (data ) => ({
        url: '/user/signin',
        method: 'POST',
        body: data,
      }),
    //   invalidatesTags: [''],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
} = authApi;