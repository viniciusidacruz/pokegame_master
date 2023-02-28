import { createSlice } from '@reduxjs/toolkit'

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
  },
})

export const { handleModalState, handleCreateModalState } =
  modalPokemonSlice.actions

export default modalPokemonSlice.reducer
