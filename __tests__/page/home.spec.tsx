import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Home from '../../src/pages/index'

import { THEME_DEFAULT } from '@/global/styles'

describe('Redirect Component', () => {
  test('Should render title and path', () => {
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
