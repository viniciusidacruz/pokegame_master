import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import { INewObjectPokemon } from '@global/types/models/newObjectPokemon'

const capturedPokemonsSlice = createSlice({
  name: 'capturedPokemons',
  initialState,
  reducers: {
    addToCapturedPokemonList: (
      state,
      action: PayloadAction<INewObjectPokemon>
    ) => {
      const pokemonParams = action.payload
      if (
        !state.capturedPokemonList.some(
          (pokemon) => pokemon.id === pokemonParams.id
        )
      ) {
        state.capturedPokemonList.push(pokemonParams)
      }
    },
    editNamePokemon: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const { id, name } = action.payload
      const pokemon = state.capturedPokemonList.find((item) => item.id === id)
      if (pokemon) {
        pokemon.name = name
      }
    },
    editPokemon: (state, action: PayloadAction<INewObjectPokemon>) => {
      const newEditedPokemon = action.payload
      const pokemon = state.capturedPokemonList.findIndex(
        (item) => item.id === newEditedPokemon.id
      )

      if (pokemon !== -1) {
        state.capturedPokemonList[pokemon] = newEditedPokemon
      }
    },
    removeFromCapturedPokemonList: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.capturedPokemonList = state.capturedPokemonList.filter(
        (item) => item.id !== id
      )
    },
  },
})

export const {
  editPokemon,
  editNamePokemon,
  addToCapturedPokemonList,
  removeFromCapturedPokemonList,
} = capturedPokemonsSlice.actions

export default capturedPokemonsSlice.reducer
