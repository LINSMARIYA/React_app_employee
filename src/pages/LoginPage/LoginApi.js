import { baseApi } from '../../services/baseApi.js'

const LoginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        LoginEmployee: builder.mutation({
            query: (body) => ({
              url: `/employee/login`,
              method: 'POST',
              body: body,
            }),
            invalidatesTags: ['Employee'],
          }),
    }),
    overrideExisting: false,
  })
  
  export const { useLoginEmployeeMutation } = LoginApi