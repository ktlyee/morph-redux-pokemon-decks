import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import { pokemonApiSlice } from '../reducers/pokemon'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>