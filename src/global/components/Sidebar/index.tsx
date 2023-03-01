import Image from 'next/image'
import { Fragment, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { Modal, ModalCreateAndEdit, ModalPokemon } from '@components/index'

import { RootState } from '@/global/store'
import { usePokemonEdit, usePokemonCreate } from '@hooks/index'
import {
  handleModalState,
  handleCreateModalState,
  handleSelectedImageURL,
} from '@slices/modalPokemon'

import * as Styles from './styles'
import { INewObjectPokemon } from '@models/newObjectPokemon'

export function Sidebar() {
  const { colors } = useTheme()
  const { handleSelectPokemonForEdit } = usePokemonEdit()
  const {
    handleChangeFile,
    isModalCreateOpen,
    selectedMyPokemon,
    clearFieldThumbnail,
    setSelectedMyPokemon,
  } = usePokemonCreate()

  const { modalPokemon, capturedPokemon } = useSelector(
    (state: RootState) => state
  )

  const dispatch = useDispatch()

  const handleValidateOpenModal = (pokemon: INewObjectPokemon) => {
    dispatch(handleModalState())
    dispatch(handleSelectedImageURL(pokemon.thumbnail))
    setSelectedMyPokemon(pokemon)

    if (pokemon.isNew) {
    } else {
      handleSelectPokemonForEdit(pokemon)
    }
  }
  const handleOpenCreateModal = () => {
    setSelectedMyPokemon(null)
    dispatch(handleSelectedImageURL(null))
    dispatch(handleCreateModalState())
  }

  useEffect(() => {
    if (!isModalCreateOpen) {
      setSelectedMyPokemon(null)
    }
  }, [isModalCreateOpen])

  return (
    <Fragment>
      <Styles.Wrapper data-testid="sidebar-element">
        {capturedPokemon.pokemons.capturedPokemonList.length === 0 && (
          <Styles.Circle
            textColor={colors.primary.dark}
            borderColor={colors.primary.dark}
            backgroundColor={colors.primary.default}
          >
            <span>?</span>
          </Styles.Circle>
        )}

        {capturedPokemon.pokemons.capturedPokemonList.map((pokemon, index) => (
          <Styles.Circle
            haveCursor
            key={`Pokemon-${pokemon.id}-${index}`}
            borderColor={colors.primary.transparent}
            backgroundColor={colors.neutrals.neutral_100}
            onClick={() => handleValidateOpenModal(pokemon)}
          >
            <Image
              fill
              alt={`Image do pokemon: ${pokemon.name}`}
              src={pokemon?.thumbnail ?? pokemon?.sprites?.front_default}
            />
          </Styles.Circle>
        ))}

        {capturedPokemon.pokemons.capturedPokemonList.length < 6 && (
          <Styles.Circle
            haveCursor
            onClick={handleOpenCreateModal}
            borderColor={colors.action.default}
            backgroundColor={colors.action.dark}
            textColor={colors.neutrals.neutral_100}
          >
            <span>+</span>
          </Styles.Circle>
        )}
      </Styles.Wrapper>

      <Modal
        isOpen={modalPokemon.isOpen}
        onClose={() => dispatch(handleModalState())}
      >
        <ModalPokemon
          isEditable
          data={selectedMyPokemon}
          onClose={() => dispatch(handleModalState())}
        />
      </Modal>

      <Modal
        isOpen={modalPokemon.isOpenCreateModal}
        onClose={() => dispatch(handleCreateModalState())}
      >
        <ModalCreateAndEdit
          handleChangeFile={handleChangeFile}
          selectedMyPokemon={selectedMyPokemon}
          imageURL={modalPokemon.selectedImageURL}
          clearFieldThumbnail={clearFieldThumbnail}
          onClose={() => dispatch(handleCreateModalState())}
          clearSelectedPokemon={() => setSelectedMyPokemon(null)}
        />
      </Modal>
    </Fragment>
  )
}
