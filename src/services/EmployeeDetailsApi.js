import { baseApi } from '../../services/baseApi.js'

const employeeDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetEmployeeById: builder.query({
        query: (id) => `/employee/${id}`,
        
      }),
  }),
  overrideExisting: false,
})

export const { useGetEmployeeByIdQuery } = employeeDetailsApi