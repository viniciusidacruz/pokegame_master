import styled, { keyframes } from 'styled-components'

const apearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const apearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const apearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const apearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const AnimationContainerLeft = styled.div`
  animation: ${apearFromLeft} 0.5s;
`

export const AnimationContainerRight = styled.div`
  animation: ${apearFromRight} 0.5s;
`

export const AnimationContainerTop = styled.div`
  animation: ${apearFromTop} 0.5s;
`

export const AnimationContainerBottom = styled.div`
  animation: ${apearFromBottom} 0.5s;
`
