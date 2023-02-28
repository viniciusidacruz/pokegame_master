import styled, { css } from 'styled-components'

import { IHeadingStyles } from './types'

export const Content = styled('h1').attrs<IHeadingStyles>(({ level }) => ({
  as: `h${level}`,
}))<IHeadingStyles>`
  ${({
    theme,
    color = 'neutral_900',
    size = 'large',
    weight = 'bold',
    lineHeight = 1.5,
  }) =>
    css`
      font-size: ${theme.fonts.sizes[size]};
      color: ${theme.colors.neutrals[color]};
      font-weight: ${theme.fonts.weight[weight]};
      line-height: ${lineHeight};
    `}
`
