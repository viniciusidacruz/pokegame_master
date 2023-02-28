import styled from 'styled-components'
import { IoMdCamera } from 'react-icons/io'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'

import { TThumbnailSource } from './types'

export const SelectImage = styled.label`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  input[type='file'] {
    display: none;
  }
`

export const Input = styled.input``

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
`

export const Icons = styled.div`
  position: relative;
`

export const IconCamera = styled(IoMdCamera)`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary.default};
`

export const IconTrash = styled(BsFillTrashFill)`
  font-size: 4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutrals.neutral_100};
  z-index: 99;
`

export const IconPlus = styled(AiFillPlusCircle)`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.action.default};
  border-radius: 50%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.6rem;
  height: 100%;
  width: 100%;
`

export const Thumbnail = styled.div<TThumbnailSource>`
  background: ${({ thumbnailSource }) => `url('${thumbnailSource}')`};
  height: 100%;
  width: 100%;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
`
