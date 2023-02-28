import Image from 'next/image'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import makeAnimated from 'react-select/animated'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useModalPokemon } from '@/global/hooks'
import {
  editPokemon,
  removeFromCapturedPokemonList,
} from '@slices/capturedPokemon'
import { ALTERNATIVE_TEXTS } from '@constants/alternatives'

import TextField from '@components/TextField'
import SelectImage from '@components/SelectImage'

import * as Styles from './styles'
import { IFormData, IModalCreateAndEdit } from './types'
import { INewObjectPokemon } from '@models/newObjectPokemon'
import { formattedPokemonData, initialValues, options } from './utils'

const animatedComponents = makeAnimated()

export function ModalCreateAndEdit({
  onClose,
  imageURL,
  handleChangeFile,
  selectedMyPokemon,
  clearFieldThumbnail,
  clearSelectedPokemon,
}: IModalCreateAndEdit) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialValues(selectedMyPokemon),
  })

  const [data, setData] = useState<INewObjectPokemon | null>(null)

  const dispatch = useDispatch()

  const handleOnSubmitData: SubmitHandler<IFormData | any> = (data) => {
    const abilities = []
    const id = selectedMyPokemon?.id ?? Math.floor(Math.random() * 900) + 100
    const thumbnail = selectedMyPokemon?.thumbnail ?? imageURL

    if (!data) return

    const selectTypes = data.select.map(
      (item: { value: string }, index: number) => {
        return {
          slot: index,
          type: {
            name: item.value,
          },
        }
      }
    )

    for (const key in data) {
      if (key.startsWith('ability') && data[key]) {
        abilities.push({ ability: { name: data[key] } })
      }
    }

    const pokemonData: INewObjectPokemon = formattedPokemonData(
      data,
      abilities,
      id,
      selectTypes,
      thumbnail
    )

    setData(pokemonData)
    dispatch(editPokemon(pokemonData))
    clearSelectedPokemon()
  }

  const handleRemovePokemonList = () => {
    if (!selectedMyPokemon?.id) return

    dispatch(removeFromCapturedPokemonList(selectedMyPokemon?.id))
    onClose()
  }

  useEffect(() => {
    if (data) {
      handleAddToPokemonList()
    }
  }, [data])

  const { handleAddToPokemonList } = useModalPokemon({
    data,
    onClose,
  })

  useEffect(() => {
    return () => clearFieldThumbnail()
  }, [])

  return (
    <Styles.Background>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.AvatarProfile>
            <SelectImage
              id="thumbnail"
              thumbnailSource={selectedMyPokemon?.thumbnail || imageURL}
              onChange={handleChangeFile}
              onDeleteThumbnail={clearFieldThumbnail}
            />
          </Styles.AvatarProfile>

          <Styles.ButtonClose
            type="button"
            onClick={() => {
              onClose()
              clearSelectedPokemon()
            }}
          >
            <Image
              width={24}
              height={24}
              src="/close.png"
              alt={ALTERNATIVE_TEXTS.iconClose}
            />
          </Styles.ButtonClose>
        </Styles.Header>
        <Styles.Container>
          <Styles.Content onSubmit={handleSubmit(handleOnSubmitData)}>
            {(selectedMyPokemon && !selectedMyPokemon.thumbnail) ||
              (!imageURL && <p>* Selecione uma imagem</p>)}

            <Styles.GroupFields>
              <TextField
                required
                id="name"
                type="text"
                label="NOME"
                placeholder="Nome"
                {...register('name')}
              />

              <TextField
                id="hp"
                min="0"
                required
                label="HP"
                type="number"
                placeholder="HP"
                {...register('hp')}
              />

              <TextField
                min="0"
                required
                id="weight"
                label="PESO"
                type="number"
                placeholder="Peso"
                {...register('weight')}
              />

              <TextField
                min="0"
                required
                id="height"
                type="number"
                label="ALTURA"
                placeholder="Altura"
                {...register('height')}
              />
            </Styles.GroupFields>

            <Styles.Title
              level={4}
              width={40}
              title="TIPO"
              size="regular"
              weight="semibold"
            />

            <Select
              isMulti
              id="select"
              options={options}
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={(selected: any) => setValue('select', selected)}
            />

            <Styles.GroupFields>
              <Styles.Title
                level={4}
                width={30}
                size="regular"
                weight="semibold"
                title="HABILIDADES"
              />

              <TextField
                required
                type="text"
                id="abilityOne"
                placeholder="Habilidade 1"
                {...register('abilityOne')}
              />

              <TextField
                type="text"
                id="abilityTwo"
                placeholder="Habilidade 2"
                {...register('abilityTwo')}
              />

              <TextField
                type="text"
                id="abilityThree"
                placeholder="Habilidade 3"
                {...register('abilityThree')}
              />

              <TextField
                type="text"
                id="abilityFour"
                placeholder="Habilidade 4"
                {...register('abilityFour')}
              />
            </Styles.GroupFields>

            <Styles.GroupFields>
              <Styles.Title
                level={4}
                width={28}
                size="regular"
                weight="semibold"
                title="ESTATÍSTICAS"
              />

              <TextField
                min="0"
                required
                id="defense"
                label="DEFESA"
                type="number"
                placeholder="00"
                icon={
                  <Image
                    width={14}
                    height={14}
                    src="/shield.png"
                    alt={ALTERNATIVE_TEXTS.shield}
                  />
                }
                {...register('defense')}
              />

              <TextField
                min="0"
                required
                id="attack"
                label="ATAQUE"
                type="number"
                placeholder="00"
                icon={
                  <Image
                    width={14}
                    height={14}
                    src="/sword.png"
                    alt={ALTERNATIVE_TEXTS.sword}
                  />
                }
                {...register('attack')}
              />

              <TextField
                min="0"
                required
                id="specialDefense"
                label="DEFESA ESPECIAL"
                type="number"
                placeholder="00"
                icon={
                  <Image
                    width={14}
                    height={14}
                    src="/shield.png"
                    alt={ALTERNATIVE_TEXTS.shield}
                  />
                }
                {...register('specialDefense')}
              />

              <TextField
                min="0"
                required
                id="specialAttack"
                label="ATAQUE ESPECIAL"
                type="number"
                placeholder="00"
                icon={
                  <Image
                    width={14}
                    height={14}
                    src="/sword.png"
                    alt={ALTERNATIVE_TEXTS.sword}
                  />
                }
                {...register('specialAttack')}
              />

              <TextField
                min="0"
                required
                id="speed"
                label="VELOCIDADE"
                type="number"
                placeholder="00"
                icon={
                  <Image
                    width={14}
                    height={14}
                    src="/speed.png"
                    alt={ALTERNATIVE_TEXTS.speed}
                  />
                }
                {...register('speed')}
              />
            </Styles.GroupFields>

            <Styles.ButtonFooter
              disabled={
                (selectedMyPokemon && !selectedMyPokemon.thumbnail) || !imageURL
              }
              isSecondary
              type="submit"
              arial-label="Botão para criar um pokemon ou editar"
              title={selectedMyPokemon?.id ? 'EDITAR POKEMON' : 'CRIAR POKEMON'}
            />
          </Styles.Content>
          {selectedMyPokemon?.id && (
            <Styles.ButtonFooter
              type="button"
              title="LIBERAR POKEMON"
              onClick={handleRemovePokemonList}
              arial-label="Botão para liberar um pokemon"
            />
          )}
        </Styles.Container>
      </Styles.Wrapper>
    </Styles.Background>
  )
}
