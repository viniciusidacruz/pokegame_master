import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Map from '../../src/pages/map'

import { store } from '@global/store'
import { THEME_DEFAULT } from '@global/styles'

describe('Redirect Component', () => {
  test('Should render title and path', () => {
    const { getByTestId, queryByTestId } = render(
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
