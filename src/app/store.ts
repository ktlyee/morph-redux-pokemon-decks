import { configureStore } from '@reduxjs/toolkit'
import auth from '../reducers/auth'
import message from '../reducers/message'

export const store = configureStore({
    reducer: {
        // add reducer
        auth: auth,
        message: message
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>