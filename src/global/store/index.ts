import { persistReducer } from 'redux-persist'
import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'

import { persistConfig } from './configs'

import capturedPokemonReducer from './slices/capturedPokemon'

const reducer = combineReducers({
  pokemons: capturedPokemonReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: {
    capturedPokemon: persistedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
