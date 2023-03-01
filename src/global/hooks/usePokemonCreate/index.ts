import { useDispatch } from 'react-redux'
import { ChangeEvent, useState } from 'react'

import { INewObjectPokemon } from '@models/newObjectPokemon'
import { handleSelectedImageURL } from '@slices/modalPokemon'

export function usePokemonCreate() {
  const [selectedMyPokemon, setSelectedMyPokemon] =
    useState<INewObjectPokemon | null>(null)
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)

  const dispatch = useDispatch()

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        const imageUrl = reader.result
        dispatch(handleSelectedImageURL(imageUrl))
      }
    } else {
      dispatch(handleSelectedImageURL(null))
    }
  }

  const clearFieldThumbnail = () => {
    dispatch(handleSelectedImageURL(null))
  }

  const handleCloseModalCreate = () => setIsModalCreateOpen(false)
  const handleOpenModalCreate = () => setIsModalCreateOpen(true)

  return {
    handleChangeFile,
    selectedMyPokemon,
    isModalCreateOpen,
    clearFieldThumbnail,
    setSelectedMyPokemon,
    handleOpenModalCreate,
    handleCloseModalCreate,
  }
}
