import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import { SiVerizon } from 'react-icons/si'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TextField from '@components/TextField'
import { Heading, Modal, ModalCreateAndEdit } from '@components/index'

import { RootState } from '@global/store'
import { translateTypes } from '@utils/translate'
import { usePokemonCreate } from '@hooks/usePokemonCreate'
import { ALTERNATIVE_TEXTS } from '@constants/alternatives'
import { handleCreateModalState, handleModalState } from '@slices/modalPokemon'
import {
  addToCapturedPokemonList,
  editNamePokemon,
  removeFromCapturedPokemonList,
} from '@slices/capturedPokemon'

import { THEME_DEFAULT } from '@global/styles'
import * as Styles from '@components/Layout/ModalPokemon/styles'
import { IModalPokemon } from '@components/Layout/ModalPokemon/types'

export const useModalPokemon = ({
  data,
  onClose,
  isEditable,
}: IModalPokemon) => {
  const [showField, setShowField] = useState(false)
  const [initialValueInput, setInitialValueInput] = useState(data?.name || '')
  const {
    handleChangeFile,
    isModalCreateOpen,
    selectedMyPokemon,
    clearFieldThumbnail,
    setSelectedMyPokemon,
    handleCloseModalCreate,
  } = usePokemonCreate()

  const { selectedImageURL } = useSelector(
    (state: RootState) => state.modalPokemon
  )

  const handleShowEditField = () => {
    setShowField(!showField)
    setSelectedMyPokemon(data)

    if (data?.isNew) {
      dispatch(handleModalState())
      dispatch(handleCreateModalState())
    }
  }

  const dispatch = useDispatch()

  const handleAddToPokemonList = () => {
    if (!data) return

    dispatch(addToCapturedPokemonList(data))
    onClose()
  }

  const handleEditNamePokemon = () => {
    if (!data) return

    dispatch(editNamePokemon({ id: data?.id, name: initialValueInput }))

    setShowField(false)
  }

  const handleRemovePokemonList = () => {
    if (!data) return

    dispatch(removeFromCapturedPokemonList(data.id))
    onClose()
  }

  const renderFieldForEdit = () => {
    if (!showField) {
      return (
        <Fragment>
          <Heading title={initialValueInput ?? 'Unknown'} level={1} />

          {isEditable && (
            <Image
              width={16}
              height={16}
              src="/editIcon.png"
              data-testid="button-for-edit"
              onClick={handleShowEditField}
              alt={ALTERNATIVE_TEXTS.iconEdit}
            />
          )}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {data?.isNew ? (
          <Modal isOpen={isModalCreateOpen} onClose={handleCloseModalCreate}>
            <ModalCreateAndEdit
              imageURL={selectedImageURL}
              onClose={handleCloseModalCreate}
              handleChangeFile={handleChangeFile}
              selectedMyPokemon={selectedMyPokemon}
              clearFieldThumbnail={clearFieldThumbnail}
              clearSelectedPokemon={() => setSelectedMyPokemon(null)}
            />
          </Modal>
        ) : (
          <Fragment>
            <TextField
              value={initialValueInput}
              onChange={(event) => setInitialValueInput(event.target.value)}
            />

            <Styles.ButtonField
              type="button"
              onClick={handleEditNamePokemon}
              aria-label="Confirmar a alteração do nome"
            >
              <SiVerizon />
            </Styles.ButtonField>

            <Styles.ButtonField
              type="button"
              onClick={handleShowEditField}
              aria-label="Esconder campo de edição"
            >
              <GrClose />
            </Styles.ButtonField>
          </Fragment>
        )}
      </Fragment>
    )
  }

  const renderListTypes = () => {
    return data?.types?.map((typePokemon) => {
      const type: keyof typeof THEME_DEFAULT.colors.types = typePokemon.type
        ?.name as keyof typeof THEME_DEFAULT.colors.types

      return (
        <Styles.InformationType key={typePokemon.slot} type={type}>
          {translateTypes[type]}
        </Styles.InformationType>
      )
    })
  }

  const renderListAbilities = () => {
    return data?.abilities?.map((ability, index) => {
      if (index === data.abilities.length - 1) {
        return (
          <Heading
            level={5}
            size="regular"
            weight="semibold"
            key={ability.slot}
            title={ability.ability?.name}
          />
        )
      }
      return (
        <Heading
          level={5}
          size="regular"
          weight="semibold"
          key={ability.slot}
          title={`${ability.ability?.name},`}
        />
      )
    })
  }

  const stats = [
    {
      id: 0,
      name: 'DEFESA',
      icon: '/shield.png',
      alt: ALTERNATIVE_TEXTS.shield,
      number: data?.defense,
    },
    {
      id: 1,
      name: 'ATAQUE',
      icon: '/sword.png',
      alt: ALTERNATIVE_TEXTS.sword,
      number: data?.attack,
    },
    {
      id: 2,
      name: 'DEFESA ESPECIAL',
      icon: '/shield.png',
      alt: ALTERNATIVE_TEXTS.shield,
      number: data?.specialDefense,
    },
    {
      id: 3,
      name: 'ATAQUE ESPECIAL',
      icon: '/sword.png',
      alt: ALTERNATIVE_TEXTS.sword,
      number: data?.specialAttack,
    },
    {
      id: 4,
      name: 'VELOCIDADE',
      icon: '/speed.png',
      alt: ALTERNATIVE_TEXTS.speed,
      number: data?.speed,
    },
  ]

  const renderListStatistics = () => {
    return stats.map((stat) => (
      <div key={stat.id}>
        <Styles.Row alignItems="center" gap={1}>
          <Image src={stat.icon} alt={stat.alt} width={14} height={14} />
          <Styles.Span>{stat.name}</Styles.Span>
        </Styles.Row>
        <span>{stat.number}</span>
      </div>
    ))
  }

  const hp_filtered = data?.stats?.find(
    (status) => status.stat.name === 'hp'
  )?.base_stat

  return {
    hp_filtered,
    renderListTypes,
    renderFieldForEdit,
    renderListAbilities,
    renderListStatistics,
    handleAddToPokemonList,
    handleRemovePokemonList,
  }
}
