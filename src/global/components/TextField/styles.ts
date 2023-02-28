import styled from 'styled-components'

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const GroupLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutrals.neutral_900};
  text-transform: uppercase;
  font-size: 0.875rem;
  text-align: start;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

export const Field = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.neutrals.neutral_400};
  background-color: #fff;
  padding: 1rem 0.75rem;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutrals.neutral_500};
  }
`
