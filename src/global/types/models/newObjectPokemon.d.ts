import { Ability, Stat, Type } from './pokemon'

export interface INewObjectPokemon {
  name: string
  height: number
  weight: number
  order?: number
  id: number
  hp?: number
  attack?: number
  defense?: number
  specialAttack?: number
  specialDefense?: number
  speed?: number
  abilities: Ability[]
  types: Type[]
  stats?: Stat[]
  sprites?: Sprites
  thumbnail: string | ArrayBuffer | null
  isNew?: boolean
}
