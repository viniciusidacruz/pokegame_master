import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { persistStore } from 'redux-persist'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { store } from '@global/store'

import { ResetCSS, THEME_DEFAULT } from '@styles/index'

export default function App({ Component, pageProps }: AppProps) {
  const persister = persistStore(store)

  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <ResetCSS />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
