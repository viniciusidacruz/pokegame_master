import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Home from '../../src/pages/index'

import { THEME_DEFAULT } from '@/global/styles'

describe('Home Page', () => {
  test('Should render content correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Home />
      </ThemeProvider>
    )

    const logoElement = getByTestId('logo-pokemon')

    expect(logoElement).toBeInTheDocument()
  })
})

export {}
