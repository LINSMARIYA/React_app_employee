// import { configureStore } from '@reduxjs/toolkit'
// import CounterSlice from './slices/CounterSlice'

// export const store = configureStore({
//     reducer: {
//         counter: CounterSlice,
//       },
// })
import { configureStore } from "@reduxjs/toolkit";
//import  { counterSlice } from "./slices/CounterSlice";
import { baseApi } from "../services/baseApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
 
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
setupListeners(store.dispatch);




