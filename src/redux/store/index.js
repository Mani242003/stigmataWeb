import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../reducer/counterSlices"
export const store = configureStore({
  reducer: {

    counter: counterReducer,
  },
})