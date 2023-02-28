import { useState } from 'react'

import { INewObjectPokemon } from '@models/newObjectPokemon'

export function usePokemonEdit() {
  const [dataPokemon, setDataPokemon] = useState<INewObjectPokemon | null>(null)

  const handleSelectPokemonForEdit = (pokemon: INewObjectPokemon) => {
    setDataPokemon(pokemon)
  }

  const handleCloseModal = () => setDataPokemon(null)

  return {
    dataPokemon,
    handleCloseModal,
    handleSelectPokemonForEdit,
  }
}
