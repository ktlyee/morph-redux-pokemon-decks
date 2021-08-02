import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const favorite = JSON.parse(localStorage.getItem('favorite') || '{}')

const initialState = favorite ? favorite : {favorite: null}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state = initialState, action: PayloadAction<object>) {
            state[Math.floor(Math.random() * 100)] = action.payload
            const serialisedState = JSON.stringify(state)
            localStorage.setItem('favorite', serialisedState)
        },
        // removeFavorite(state, action: PayloadAction<string>) {
        //     delete state[action.payload]
        // }
    }
})

export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer