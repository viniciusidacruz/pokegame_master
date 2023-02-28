import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Modal } from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('Modal Component', () => {
  test('Should render children', () => {
    const handleClose = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Modal isOpen={true} onClose={handleClose}>
          <h1>Deu certo</h1>
        </Modal>
      </ThemeProvider>
    )

    const titleElement = getByText('Deu certo')

    expect(titleElement).toBeInTheDocument()
  })

  test('Should not render children', () => {
    const handleClose = jest.fn()

    const { queryByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Modal isOpen={false} onClose={handleClose}>
          <h1>Deu certo</h1>
        </Modal>
      </ThemeProvider>
    )

    const modalContainer = queryByTestId('modal-container')

    expect(modalContainer).toBeNull()
  })
})

export {}
