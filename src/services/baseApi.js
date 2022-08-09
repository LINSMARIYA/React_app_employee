
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {getStorage}   from "../services/util";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'employee',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api',

  prepareHeaders: (headers)  => {
    const token = getStorage("idToken");
    //console.log(token)
     // If we have a token set in state, let's assume that we should be passing it.
     if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}),


  
  tagTypes: [ 'Employee'],
  refetchOnMountOrArgChange:true,
 
  
  //copy
  
  //comment
  endpoints: (builder) => ({
    GetEmployee: builder.query({
      query: () => `/employee`,
      providesTags: ['Employee'],
    }),

    
      GetEmployeeById: builder.query({
        query: (id) => `/employee/${id}`,
        
      }),
    LoginEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `/employee/login`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Employee'],
    }),

    CreateEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `/employee`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Employee'],
    }),
  
    DeleteEmployeeById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'Delete',
       
      }),
      invalidatesTags: ['Employee'],
    }),

    UpdateEmployeeById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `/employee/${body.id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
})

export default baseApi ;
export const { useGetEmployeeQuery, useCreateEmployeeMutation,useDeleteEmployeeByIdMutation ,useUpdateEmployeeByIdMutation, useGetEmployeeByIdQuery, useLoginEmployeeMutation} = baseApi;