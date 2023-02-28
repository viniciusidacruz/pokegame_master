import { INewObjectPokemon } from '@models/newObjectPokemon'

export const data: INewObjectPokemon = {
  name: 'gothorita',
  height: 7,
  weight: 180,
  order: 697,
  id: 575,
  hp: 60,
  attack: 45,
  defense: 70,
  specialAttack: 75,
  specialDefense: 85,
  speed: 55,
  abilities: [
    {
      ability: {
        name: 'frisk',
      },
      slot: 1,
    },
    {
      ability: {
        name: 'competitive',
      },
      slot: 2,
    },
    {
      ability: {
        name: 'shadow-tag',
      },
      slot: 3,
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'psychic',
      },
    },
  ],
  thumbnail:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
}
