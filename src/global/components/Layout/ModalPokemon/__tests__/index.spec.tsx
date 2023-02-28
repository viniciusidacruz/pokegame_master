import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { fireEvent, render } from '@testing-library/react'

import { data } from '../mocks/data'
import { store } from '@global/store'

import { ModalPokemon } from '../'

import { THEME_DEFAULT } from '@styles/theme'

describe('Modal Component', () => {
  test('should render modal content', () => {
    const handleClose = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <ModalPokemon data={data} onClose={handleClose} />
        </Provider>
      </ThemeProvider>
    )

    const titleHP = getByText('HP')
    const titleType = getByText('TIPO')
    const titleWeight = getByText('Peso')
    const titleHeight = getByText('Altura')
    const namePokemon = getByText('gothorita')
    const titleAbility = getByText('HABILIDADES')

    expect(titleHP).toBeInTheDocument()
    expect(titleType).toBeInTheDocument()
    expect(namePokemon).toBeInTheDocument()
    expect(titleWeight).toBeInTheDocument()
    expect(titleHeight).toBeInTheDocument()
    expect(titleAbility).toBeInTheDocument()
  })

  test('should render modal values content', () => {
    const handleClose = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <ModalPokemon data={data} onClose={handleClose} />
        </Provider>
      </ThemeProvider>
    )

    const nameValue = getByText('gothorita')
    const hpValue = getByText('60/60')
    const typeValue = getByText('Psíquico')
    const heightValue = getByText('7 m')
    const weightValue = getByText('180 kg')
    const abilitiesValue = getByText('shadow-tag')

    expect(hpValue).toBeInTheDocument()
    expect(nameValue).toBeInTheDocument()
    expect(typeValue).toBeInTheDocument()
    expect(heightValue).toBeInTheDocument()
    expect(weightValue).toBeInTheDocument()
    expect(abilitiesValue).toBeInTheDocument()
  })

  test('should render modal informations and edit', () => {
    const handleClose = jest.fn()

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <ModalPokemon data={data} isEditable onClose={handleClose} />
        </Provider>
      </ThemeProvider>
    )

    const titleStats = getByText('ESTATÍSTICAS')
    const titleButton = getByText('LIBERAR POKEMON')
    const buttonEdit = getByTestId('button-for-edit')

    expect(titleStats).toBeInTheDocument()
    expect(buttonEdit).toBeInTheDocument()
    expect(titleButton).toBeInTheDocument()
  })

  test('should render modal stats values', () => {
    const handleClose = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <ModalPokemon data={data} isEditable onClose={handleClose} />
        </Provider>
      </ThemeProvider>
    )

    const defenseValue = getByText('70')
    const attackValue = getByText('45')
    const specialDefenseValue = getByText('85')
    const specialAttackValue = getByText('75')
    const speedValue = getByText('55')

    expect(defenseValue).toBeInTheDocument()
    expect(attackValue).toBeInTheDocument()
    expect(specialDefenseValue).toBeInTheDocument()
    expect(specialAttackValue).toBeInTheDocument()
    expect(speedValue).toBeInTheDocument()
  })

  test('should render closeModal in onClick', () => {
    const handleClose = jest.fn()

    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <ModalPokemon data={data} isEditable onClose={handleClose} />
        </Provider>
      </ThemeProvider>
    )

    const buttonCloseModalElement = getByTestId('button-close-modal')

    fireEvent.click(buttonCloseModalElement)

    expect(handleClose).toHaveBeenCalled()
  })
})

export {}
