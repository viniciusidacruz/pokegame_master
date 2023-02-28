import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem 0;
  background: ${({ theme }) => theme.colors.primary.default};
  background: linear-gradient(90deg, #44ec7c 0%, #5cfcdc 100%);
`
