import { IButton } from './types'
import { Wrapper } from './styles'

export function Button({ title, isSecondary = false, ...rest }: IButton) {
  return (
    <Wrapper isSecondary={isSecondary} {...rest}>
      {title}
    </Wrapper>
  )
}
