import Image from 'next/image'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'

import { Modal, ModalCreateAndEdit, ModalPokemon } from '@components/index'

import { RootState } from '@/global/store'
import { usePokemonEdit, usePokemonCreate } from '@hooks/index'

import * as Styles from './styles'
import { INewObjectPokemon } from '@models/newObjectPokemon'

export function Sidebar() {
  const { colors } = useTheme()
  const { dataPokemon, handleCloseModal, handleSelectPokemonForEdit } =
    usePokemonEdit()
  const {
    imageURL,
    handleChangeFile,
    isModalCreateOpen,
    selectedMyPokemon,
    clearFieldThumbnail,
    setSelectedMyPokemon,
    handleOpenModalCreate,
    handleCloseModalCreate,
  } = usePokemonCreate()

  const { capturedPokemonList } = useSelector(
    (state: RootState) => state.capturedPokemon.pokemons
  )

  const handleValidateOpenModal = (pokemon: INewObjectPokemon) => {
    if (pokemon.isNew) {
      setSelectedMyPokemon(pokemon)
      handleOpenModalCreate()
    } else {
      handleSelectPokemonForEdit(pokemon)
    }
  }

  return (
    <Fragment>
      <Styles.Wrapper data-testid="sidebar-element">
        {capturedPokemonList.length === 0 && (
          <Styles.Circle
            textColor={colors.primary.dark}
            borderColor={colors.primary.dark}
            backgroundColor={colors.primary.default}
          >
            <span>?</span>
          </Styles.Circle>
        )}

        {capturedPokemonList.map((pokemon, index) => (
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

        {capturedPokemonList.length < 6 && (
          <Styles.Circle
            haveCursor
            onClick={handleOpenModalCreate}
            borderColor={colors.action.default}
            backgroundColor={colors.action.dark}
            textColor={colors.neutrals.neutral_100}
          >
            <span>+</span>
          </Styles.Circle>
        )}
      </Styles.Wrapper>

      <Modal isOpen={!!dataPokemon} onClose={handleCloseModal}>
        <ModalPokemon
          isEditable
          data={dataPokemon}
          onClose={handleCloseModal}
        />
      </Modal>

      <Modal isOpen={isModalCreateOpen} onClose={handleCloseModalCreate}>
        <ModalCreateAndEdit
          imageURL={imageURL}
          onClose={handleCloseModalCreate}
          handleChangeFile={handleChangeFile}
          selectedMyPokemon={selectedMyPokemon}
          clearFieldThumbnail={clearFieldThumbnail}
          clearSelectedPokemon={() => setSelectedMyPokemon(null)}
        />
      </Modal>
    </Fragment>
  )
}
