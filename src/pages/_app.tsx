import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ResetCSS, THEME_DEFAULT } from '@styles/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <ResetCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
