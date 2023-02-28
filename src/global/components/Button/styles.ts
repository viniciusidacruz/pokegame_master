import styled from 'styled-components'

export const Wrapper = styled.button<{ isSecondary: boolean }>`
  padding: 1rem 2rem;
  border: ${({ theme, isSecondary }) =>
    isSecondary ? `2px solid ${theme.colors.action.light}` : 0};
  border-radius: 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme, isSecondary }) =>
    isSecondary
      ? theme.colors.action.light
      : theme.colors.neutrals.neutral_100};
  background: ${({ theme, isSecondary }) =>
    isSecondary ? 'transparent' : theme.colors.action.light};
  box-shadow: 0 20px 16px rgba(0, 0, 0, 0.1);
`
