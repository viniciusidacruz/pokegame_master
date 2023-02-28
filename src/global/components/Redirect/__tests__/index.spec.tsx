import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Redirect } from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('Redirect Component', () => {
  test('Should render title and path', () => {
    const { getByText, getByRole } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Redirect title="Test" path="/test" />
      </ThemeProvider>
    )

    const titleElement = getByText('Test')
    const link = getByRole('link')

    expect(titleElement).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
})

export {}
