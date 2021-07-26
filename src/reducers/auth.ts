import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user') || '')

const initialState = user ? user : { user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state = initialState, action: PayloadAction<object>) {
      state = action.payload
      const serialisedState = JSON.stringify(state)
      localStorage.setItem('user', serialisedState)
    }
  }
})

export const { register } = authSlice.actions
export default authSlice.reducer