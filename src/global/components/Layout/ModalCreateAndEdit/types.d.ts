import { ChangeEvent } from 'react'

import { INewObjectPokemon } from '@models/newObjectPokemon'

export interface IModalCreateAndEdit {
  imageURL: string | ArrayBuffer | null
  onClose: () => void
  selectedMyPokemon: INewObjectPokemon | null
  clearFieldThumbnail: () => void
  clearSelectedPokemon: () => void
  handleChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IFormData {
  name: string
  hp: number
  weight: number
  height: number
  select: { value: string }[]
  thumbnail?: string | ArrayBuffer | null
  defense: number
  attack: number
  specialDefense: number
  specialAttack: number
  speed: number
  [key: string]: any
}

export interface IModalStyles {
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'
  mb?: number
  mt?: number
  gap?: number
}
