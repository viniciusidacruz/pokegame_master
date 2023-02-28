import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Button } from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('Button Component', () => {
  test('Should render title', () => {
    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Button title="Test" />
      </ThemeProvider>
    )

    const titleElement = getByText('Test')

    expect(titleElement).toBeInTheDocument()
  })
})

export {}
