import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useCallback, useEffect, useRef, useState } from 'react'

import ashStopSource from '@assets/images/ashStop.png'
import ashFrontSource from '@assets/images/ashFront.png'
import errorSource from '@assets/images/tooltipError.png'
import searchSource from '@assets/images/searchTooltip.png'
import ashLeftLegSource from '@assets/images/ashLeftLeg.png'
import ashRightLegSource from '@assets/images/ashRightLeg.png'
import searchingSource from '@assets/images/searchingTooltip.png'

import { RootState } from '@global/store'
import { RequestPokemon } from '@services/RequestPokemon'

import { WrapperTooltip } from '@styles/pages/Map'
import { INewObjectPokemon } from '@models/newObjectPokemon'
import { AnimationContainerBottom } from '@styles/animations'

export const useMovement = (handleOpenModal: () => void) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [pokemon, setPokemon] = useState<INewObjectPokemon | null>(null)
  const [positionStartCharacter, setPositionStartCharacter] = useState(0)

  const { capturedPokemonList } = useSelector(
    (state: RootState) => state.capturedPokemon.pokemons
  )

  const listPositionsAshImages = [
    ashLeftLegSource,
    ashRightLegSource,
    ashStopSource,
  ]

  const ashRef = useRef<HTMLDivElement | null>(null)
  const handleSearchPokemon = useCallback(async () => {
    if (capturedPokemonList.length < 6) {
      setLoading(true)
      const randomNumber = Math.floor(Math.random() * 807) + 1

      const { data, status } = await RequestPokemon(randomNumber)

      //Coloquei o timeout para a visualização do Ash andando por mais tempo, caso ao contrário basta remover o timeout
      setTimeout(() => {
        if (status !== 200) return setError(true)

        if (data) {
          const findElementInStats = (statName: string) => {
            return data?.stats?.find(
              (status: any) => status.stat.name === statName
            )?.base_stat
          }
          const newObjectPokemon: INewObjectPokemon = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            order: data.order,
            id: data.id,
            hp: findElementInStats('hp'),
            attack: findElementInStats('attack'),
            defense: findElementInStats('defense'),
            specialAttack: findElementInStats('special-attack'),
            specialDefense: findElementInStats('special-defense'),
            speed: findElementInStats('speed'),
            abilities: data.abilities,
            types: data.types,
            thumbnail: data?.sprites?.front_default ?? '/not-found.png',
          }

          setPokemon(newObjectPokemon)
        }

        setLoading(false)
        handleOpenModal()
      }, 2000)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [capturedPokemonList])

  const renderTooltip = () => {
    if (loading) {
      return (
        <WrapperTooltip>
          <AnimationContainerBottom>
            <Image
              src={searchingSource}
              alt="Tooltip indicando a busca do pokemon"
            />
          </AnimationContainerBottom>
        </WrapperTooltip>
      )
    }

    if (error || (isHovering && capturedPokemonList.length === 6)) {
      return (
        <WrapperTooltip>
          <AnimationContainerBottom>
            <Image
              src={errorSource}
              alt="Tooltip indicando que algo deu errado ao buscar o pokemon"
            />
          </AnimationContainerBottom>
        </WrapperTooltip>
      )
    }

    if (isHovering) {
      return (
        <WrapperTooltip>
          <AnimationContainerBottom>
            <Image
              src={searchSource}
              alt="Tooltip indicando para buscar um pokemon"
            />
          </AnimationContainerBottom>
        </WrapperTooltip>
      )
    }
  }

  // useEffect para o controle da movimentação do personagem Ash
  useEffect(() => {
    if (loading) {
      const intervalId = setInterval(() => {
        setPositionStartCharacter(
          (position) => (position + 1) % listPositionsAshImages.length
        )
      }, 200)

      return () => clearInterval(intervalId)
    }
  }, [listPositionsAshImages.length, loading])

  // useEffect para o controle de ao passar o mouse em cima do personagem Ash alterar o estado isHovering
  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true)
    const handleMouseOut = () => setIsHovering(false)

    if (ashRef.current) {
      ashRef.current.addEventListener('mouseover', handleMouseOver)
      ashRef.current.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      if (ashRef.current) {
        ashRef.current.removeEventListener('mouseover', handleMouseOver)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ashRef.current.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  const positionAshImage = loading
    ? listPositionsAshImages[positionStartCharacter]
    : ashFrontSource

  return {
    ashRef,
    pokemon,
    renderTooltip,
    positionAshImage,
    handleSearchPokemon,
  }
}
