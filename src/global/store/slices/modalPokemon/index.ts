import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './initialState'

const modalPokemonSlice = createSlice({
  name: 'capturedPokemons',
  initialState,
  reducers: {
    handleModalState: (state) => {
      state.isOpen = !state.isOpen
    },
    handleCreateModalState: (state) => {
      state.isOpenCreateModal = !state.isOpenCreateModal
    },
    handleSelectedImageURL: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.selectedImageURL = action.payload
    },
  },
})

export const {
  handleModalState,
  handleCreateModalState,
  handleSelectedImageURL,
} = modalPokemonSlice.actions

export default modalPokemonSlice.reducer
