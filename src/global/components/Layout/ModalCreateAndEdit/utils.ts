import { INewObjectPokemon } from '@models/newObjectPokemon'
import { IFormData } from './types'

export const options = [
  { value: 'ice', label: 'Gelo' },
  { value: 'steel', label: 'Aço' },
  { value: 'fire', label: 'Fogo' },
  { value: 'bug', label: 'Inseto' },
  { value: 'fairy', label: 'Fada' },
  { value: 'water', label: 'Água' },
  { value: 'flying', label: 'Vòo' },
  { value: 'rock', label: 'Escuro' },
  { value: 'grass', label: 'Grama' },
  { value: 'ground', label: 'Solo' },
  { value: 'dragon', label: 'Dragão' },
  { value: 'normal', label: 'Normal' },
  { value: 'poison', label: 'Tóxico' },
  { value: 'ghost', label: 'Fantasma' },
  { value: 'fighting', label: 'fighting' },
  { value: 'psychic', label: 'Psíquico' },
  { value: 'electric', label: 'electric' },
]

export const formattedPokemonData = (
  data: IFormData,
  abilities: Array<any>,
  id: number,
  selectTypes: any,
  imageURL: string | ArrayBuffer | null
) => {
  return {
    name: data.name,
    hp: data.hp,
    weight: data.weight,
    height: data.height,
    abilities: abilities,
    defense: data.defense,
    attack: data.attack,
    specialDefense: data.specialDefense,
    specialAttack: data.specialAttack,
    speed: data.speed,
    types: selectTypes,
    thumbnail: imageURL,
    id,
    isNew: true,
  }
}

export const initialValues = (selectedMyPokemon: INewObjectPokemon | null) => {
  if (!selectedMyPokemon) return

  return {
    name: selectedMyPokemon?.name || '',
    height: selectedMyPokemon?.height || 0,
    weight: selectedMyPokemon?.weight || 0,
    hp: selectedMyPokemon?.hp || 0,
    abilityOne: selectedMyPokemon?.abilities[0]?.ability.name || 0,
    abilityTwo: selectedMyPokemon?.abilities[1]?.ability.name || 0,
    abilityThree: selectedMyPokemon?.abilities[2]?.ability.name || 0,
    abilityFour: selectedMyPokemon?.abilities[3]?.ability.name || 0,
    defense: selectedMyPokemon?.defense || 0,
    attack: selectedMyPokemon?.attack || 0,
    specialAttack: selectedMyPokemon?.specialAttack || 0,
    specialDefense: selectedMyPokemon?.specialDefense || 0,
    speed: selectedMyPokemon?.speed || 0,
    thumbnail: selectedMyPokemon?.thumbnail || null,
    select:
      [
        {
          value: selectedMyPokemon.types[0]?.type.name,
          label: '',
        },
      ] || null,
  }
}
