import { baseApi } from '../../services/baseApi.js'

const EmployeeListApi = baseApi.injectEndpoints({

      endpoints: (builder) => ({
        GetEmployee: builder.query({
          query: () => `/employee`,
          providesTags: ['Employee'],
        }),

        DeleteEmployeeById: builder.mutation({
          query: (id) => ({
            url: `/employee/${id}`,
            method: 'Delete',
           
          }),
          invalidatesTags: ['Employee'],
        }),
    })
  })
    export const { useGetEmployeeQuery,useDeleteEmployeeByIdMutation } = EmployeeListApi