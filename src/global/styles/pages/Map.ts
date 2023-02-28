import styled from 'styled-components'
import imageSource from '@assets/images/pageBackground.png'

export const Main = styled.main`
  background-image: url(${imageSource.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #5dae12;
  width: 100%;
  height: 100vh;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 740px) and (min-width: 360px) {
    background-size: cover;
  }
`

export const WrapperAsh = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`

export const WrapperTooltip = styled.div`
  position: absolute;
  top: -80px;
`
