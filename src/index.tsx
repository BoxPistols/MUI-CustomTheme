import * as ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { theme } from './lib/theme'
import Header from './components/Header'
import './style.css'

const cache = createCache({
  key: 'my-prefix',
  prepend: true,
  stylisPlugins: [],
})

function Main() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <Header />
        </StyledEngineProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

ReactDOM.hydrate(<Main />, document.querySelector('#root'))
