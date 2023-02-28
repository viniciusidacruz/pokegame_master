import Image from 'next/image'
import styled, { css } from 'styled-components'

import { Button } from '@components/index'
import { Heading } from '../../Heading'

import { IModalStyles } from './types'
import { THEME_DEFAULT } from '@/global/styles'

export const Background = styled.div`
  display: flex;
  max-height: 90vh;
  overflow: auto;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.neutrals.neutral_100};

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: 740px) and (min-width: 360px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
  }
`

export const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.primary.default};
  background: linear-gradient(90deg, #44ec7c 0%, #5cfcdc 100%);
  min-width: 30rem;

  @media (max-width: 740px) and (min-width: 360px) {
    min-width: 100%;
  }
`

export const Header = styled.div`
  position: relative;
  height: 9rem;
  display: flex;
  justify-content: center;
`

export const ButtonClose = styled.button`
  background-color: ${({ theme }) => theme.colors.neutrals.neutral_100};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.neutral_900};
`

export const Container = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;

  background-color: ${({ theme }) => theme.colors.neutrals.neutral_100};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;

  @media (max-width: 740px) and (min-width: 360px) {
    height: 100%;
  }
`

export const Content = styled.div`
  text-align: center;
  position: relative;
  top: 7rem;
  height: 100%;
`

export const HeaderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  margin-bottom: 2rem;

  h1 {
    text-transform: uppercase;
  }

  img {
    cursor: pointer;
  }

  input {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`
export const ButtonField = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.neutrals.neutral_300};
  border: 1px solid ${({ theme }) => theme.colors.neutrals.neutral_400};
  color: ${({ theme }) => theme.colors.neutrals.neutral_900};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`

export const AvatarProfile = styled.div`
  position: absolute;
  top: 2rem;
  border: 4px solid ${({ theme }) => theme.colors.primary.default};
  height: 14.5rem;
  width: 14.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutrals.neutral_100};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div<IModalStyles>`
  ${({ justifyContent, alignItems, mb, mt, gap = 0 }) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    gap: ${gap}rem;
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  &:not(:last-child) {
    border-right: 2px solid ${({ theme }) => theme.colors.neutrals.neutral_400};
  }
  justify-content: center;
  h3 {
    margin-bottom: 0.2rem;
  }
`

export const ColumnStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

export const Group = styled.div`
  position: relative;
  margin: 2rem 0;
`

export const Title = styled(Heading)<{ width: number }>`
  position: relative;
  margin-bottom: 1rem;

  &::after,
  &::before {
    content: '';
    height: 2px;
    display: block;
    position: absolute;
    width: ${({ width }) => width}%;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.neutrals.neutral_400};
  }

  &::after {
    right: 0;
  }

  &::before {
    left: 0;
  }
`

export const List = styled.div<{ isGap?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 ${({ isGap }) => (isGap ? '2rem' : '1rem')};
`

export const InformationType = styled.div<{
  type: keyof typeof THEME_DEFAULT.colors.types
}>`
  color: ${({ theme, type }) =>
    type === 'normal'
      ? theme.colors.neutrals['neutral_900']
      : theme.colors.neutrals['neutral_100']};
  padding: 0.75rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border: none;
  border-radius: 50px;
  background-color: ${({ theme, type }) => theme.colors.types[type]};
`

export const PokeballImage = styled(Image)`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  right: 50%;
  cursor: pointer;
  transform: translate(-50%, 0);
  background: transparent;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.5));
`

export const ButtonFooter = styled(Button)`
  position: fixed;
  bottom: 1.5rem;
  cursor: pointer;
  transform: translate(-50%, 0);
`
