import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import docReducer from '../features/docs/docSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    docs: docReducer,
  },
})
