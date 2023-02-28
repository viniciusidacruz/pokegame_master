export interface IPokemonParams {
  abilities: Ability[]
  base_experience: number
  forms: NamePathParams[]
  game_indices: string[]
  height: number
  held_items: string[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: string[]
  species: NamePathParams
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Stat {
  base_stat: number
  effort: number
  stat: NamePathParams
}

export interface Type {
  slot: number
  type: {
    name: string
  }
}

export interface Ability {
  ability: NamePathParams
  is_hidden?: boolean
  slot?: number
}

export interface NamePathParams {
  name: string
  // url?: string
}

export interface Mfe {
  move: NamePathParams
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: NamePathParams
  version_group: NamePathParams
}

export interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: Other
  versions: Versions
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export interface DreamWorld {
  front_default: string | null
  front_female: string | null
}

export interface Home {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export interface OfficialArtwork {
  front_default: string | null
  front_shiny: string | null
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': GenerationVi
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export interface GenerationI {
  'red-blue': ColorParams
  yellow: ColorParams
}

export interface ColorParams {
  back_default: string | null
  back_gray: string | null
  back_transparent: string | null
  front_default: string | null
  front_gray: string | null
  front_transparent: string | null
}

export interface GenerationIi {
  crystal: Crystal
  gold: RockParams
  silver: RockParams
}

export interface Crystal {
  back_default: string | null
  back_shiny: string | null
  back_shiny_transparent: string | null
  back_transparent: string | null
  front_default: string | null
  front_shiny: string | null
  front_shiny_transparent: string | null
  front_transparent: string | null
}

export interface RockParams {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
  front_transparent: string | null
}

export interface GenerationIii {
  emerald: Emerald
  'firered-leafgreen': FireredLeafgreen
  'ruby-sapphire': RubySapphire
}

export interface Emerald {
  front_default: string | null
  front_shiny: string | null
}

export interface FireredLeafgreen {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

export interface RubySapphire {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

export interface GenerationIv {
  'diamond-pearl': OtherParams
  'heartgold-soulsilver': OtherParams
  platinum: OtherParams
}
