import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Map from '../../src/pages/map'

import { store } from '@global/store'
import { THEME_DEFAULT } from '@global/styles'

describe('Map Page', () => {
  test('Should render content correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={THEME_DEFAULT}>
        <Provider store={store}>
          <Map />
        </Provider>
      </ThemeProvider>
    )

    const sidebarElement = getByTestId('sidebar-element')
    const ashElement = getByTestId('ash-element')

    expect(sidebarElement).toBeInTheDocument()
    expect(ashElement).toBeInTheDocument()
  })
})

export {}
