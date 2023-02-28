import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import TextField from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('TextField Component', () => {
  test('Should render placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <TextField placeholder="Your name here" />
      </ThemeProvider>
    )

    const placeholder = getByPlaceholderText('Your name here')

    expect(placeholder).toBeInTheDocument()
  })

  test('Should render label if exists', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <TextField label="Nome" />
      </ThemeProvider>
    )

    const groupLabelElement = getByTestId('group-label')

    expect(groupLabelElement).toBeInTheDocument()
  })

  test('Should associate the label with the correct input', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <TextField label="Nome:" id="name" />
      </ThemeProvider>
    )

    const labelElement = getByTestId('label-element') as HTMLLabelElement
    const inputElement = getByTestId('input-element').id

    expect(labelElement.htmlFor).toEqual(inputElement)
  })

  test('Should render icon in field', () => {
    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <TextField label="Nome:" icon={<div>Icon</div>} />
      </ThemeProvider>
    )

    const elementForIcon = getByText('Icon')

    expect(elementForIcon).toBeInTheDocument()
  })
})

export {}
