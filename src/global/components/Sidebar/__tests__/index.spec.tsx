import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { store } from '@/global/store'

import { Sidebar } from '../'

import { THEME_DEFAULT } from '../../../styles/theme'

describe('Sidebar Component', () => {
  test('Should render element', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </ThemeProvider>
    )

    const sidebarElement = getByTestId('sidebar-element')

    expect(sidebarElement).toBeInTheDocument()
  })

  test('should render icons for add new pokemon and question if length 0', () => {
    const { getByText } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </ThemeProvider>
    )

    const questionIcon = getByText('?')
    const questionAddMorePokemon = getByText('+')

    expect(questionIcon).toBeInTheDocument()
    expect(questionAddMorePokemon).toBeEnabled()
    expect(questionAddMorePokemon).toBeInTheDocument()
  })
})

export {}
