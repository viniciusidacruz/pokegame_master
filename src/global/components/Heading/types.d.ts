import { THEME_DEFAULT } from '@styles/index'

export interface IHeading {
  title: string | number
  color?: keyof typeof THEME_DEFAULT.colors.neutrals
  size?: keyof typeof THEME_DEFAULT.fonts.sizes
  weight?: keyof typeof THEME_DEFAULT.fonts.weight
  level: 1 | 2 | 3 | 4 | 5 | 6
  lineHeight?: number
}

export type IHeadingStyles = Omit<IHeading, 'title'>
