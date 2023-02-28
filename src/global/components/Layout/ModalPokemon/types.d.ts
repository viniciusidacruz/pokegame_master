import { INewObjectPokemon } from '@types/models/newObjectPokemon'

export interface IModalPokemon {
  data: INewObjectPokemon | null
  onClose: () => void
  isEditable?: boolean
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
