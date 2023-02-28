import styled from 'styled-components'
import { ITypesColors } from './types'

export const Wrapper = styled.aside`
  position: fixed;
  top: 2rem;
  left: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`

export const Circle = styled.div<ITypesColors>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ haveCursor }) => (haveCursor ? 'pointer' : 'default')};

  img {
    border-radius: 50%;
  }

  span {
    font-size: 3rem;
    color: ${({ textColor }) => textColor};
  }
`
