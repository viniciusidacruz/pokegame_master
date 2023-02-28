import { ChangeEvent, useState } from 'react'

import { INewObjectPokemon } from '@models/newObjectPokemon'

export function usePokemonCreate() {
  const [selectedMyPokemon, setSelectedMyPokemon] =
    useState<INewObjectPokemon | null>(null)
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>(null)

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        const imageUrl = reader.result
        setImageURL(imageUrl)
      }
    } else {
      setImageURL(null)
    }
  }

  const clearFieldThumbnail = () => setImageURL(null)

  const handleCloseModalCreate = () => setIsModalCreateOpen(false)
  const handleOpenModalCreate = () => setIsModalCreateOpen(true)

  return {
    imageURL,
    handleChangeFile,
    selectedMyPokemon,
    isModalCreateOpen,
    clearFieldThumbnail,
    setSelectedMyPokemon,
    handleOpenModalCreate,
    handleCloseModalCreate,
  }
}