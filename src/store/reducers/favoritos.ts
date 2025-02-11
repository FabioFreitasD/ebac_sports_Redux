import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Array<number | string>,
  reducers: {
    addFavorito: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    removeFavorito: (state, action: PayloadAction<number | string>) => {
      return state.filter((productId) => productId !== action.payload)
    }
  }
})

export const { addFavorito, removeFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
