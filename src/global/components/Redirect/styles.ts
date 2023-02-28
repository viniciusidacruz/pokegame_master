import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.neutrals.neutral_100};
  background-color: ${({ theme }) => theme.colors.action.light};
  box-shadow: 0 20px 16px rgba(0, 0, 0, 0.1);
`
