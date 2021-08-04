import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import favoriteReducer from '../reducers/favorite'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      favorite: favoriteReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>