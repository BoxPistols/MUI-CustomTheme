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
  key: 'em',
  prepend: true,
  stylisPlugins: [],
})

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <CssBaseline />
          <Header />
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
