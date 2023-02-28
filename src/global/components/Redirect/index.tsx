import React from 'react'

import { Wrapper } from './styles'
import { IRedirect } from './types'

export function Redirect({ title, path }: IRedirect) {
  return <Wrapper href={path}>{title}</Wrapper>
}
