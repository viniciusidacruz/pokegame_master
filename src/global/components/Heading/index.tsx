import { IHeading } from './types'
import { Content } from './styles'

export function Heading({ title, ...rest }: IHeading) {
  return <Content {...rest}>{title}</Content>
}
