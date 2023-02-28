import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import SelectImage from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('TextField Component', () => {
  test('Should render thumbnail if exists', () => {
    const handleDeleteThumbnail = jest.fn()
    const handleChangeFile = jest.fn()

    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <SelectImage
          id="selectImage"
          onChange={handleChangeFile}
          thumbnailSource="/pokeball.png"
          onDeleteThumbnail={handleDeleteThumbnail}
        />
      </ThemeProvider>
    )

    const headerElement = getByTestId('header-thumbnail')

    expect(headerElement).toBeInTheDocument()
  })

  test('Should remove thumbnail if click', () => {
    const handleDeleteThumbnail = jest.fn()
    const handleChangeFile = jest.fn()

    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <SelectImage
          id="selectImage"
          onChange={handleChangeFile}
          thumbnailSource="/pokeball.png"
          onDeleteThumbnail={handleDeleteThumbnail}
        />
      </ThemeProvider>
    )

    const buttonElementRemove = getByTestId('button-element')

    fireEvent.click(buttonElementRemove)

    expect(handleDeleteThumbnail).toHaveBeenCalled()
  })

  test('Should remove thumbnail if click', () => {
    const handleDeleteThumbnail = jest.fn()
    const handleChangeFile = jest.fn()

    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <SelectImage
          id="selectImage"
          thumbnailSource=""
          onChange={handleChangeFile}
          onDeleteThumbnail={handleDeleteThumbnail}
        />
      </ThemeProvider>
    )

    const contentElementInput = getByTestId('content-field')
    const headerElement = queryByTestId('header-thumbnail')

    expect(contentElementInput).toBeInTheDocument()
    expect(headerElement).toBeNull()
  })
})

export {}
