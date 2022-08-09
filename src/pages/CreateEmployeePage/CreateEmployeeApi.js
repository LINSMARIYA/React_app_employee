import { baseApi } from '../../services/baseApi.js'

const CreateEmployeeApi = baseApi.injectEndpoints({

      endpoints: (builder) => ({
        CreateEmployee: builder.mutation({
        // CreateEmployee: builder.query({
            query: (body) => ({
                url: `/employee`,
                method: 'POST',
                body: body,
              }),
              invalidatesTags: ['Employee'],
            
          }),
      }),
      overrideExisting: false,
    })
    
    export const { useCreateEmployeeMutation} = CreateEmployeeApi