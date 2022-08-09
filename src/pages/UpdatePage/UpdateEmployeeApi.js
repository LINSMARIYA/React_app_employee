import { baseApi } from '../../services/baseApi.js'

const UpdateEmployeeApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
    UpdateEmployeeById: builder.mutation({
    //    UpdateEmployeeById: builder.query({
        query: (body) => ({
            url: `/employee/${body.id}`,
            method: 'PUT',
            body: body,
          }),
          invalidatesTags: ['Employee'],
            
          }),
      }),
      overrideExisting: false,
    })
    
    export const { useUpdateEmployeeByIdMutation } = UpdateEmployeeApi