import { useState } from 'react'

export const useGeneratePokeModal = () => {
  const [showModalPokemon, setShowModalPokemon] = useState(false)

  const handleOpenModal = () => setShowModalPokemon(true)
  const handleCloseModal = () => setShowModalPokemon(false)

  return {
    handleOpenModal,
    showModalPokemon,
    handleCloseModal,
  }
}
