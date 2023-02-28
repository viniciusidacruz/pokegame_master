import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Heading } from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('Heading Component', () => {
  test('Should render title', () => {
    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Heading title="Test" level={1} />
      </ThemeProvider>
    )

    const titleElement = getByText('Test')

    expect(titleElement).toBeInTheDocument()
  })
})

export {}
