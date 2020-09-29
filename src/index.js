import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import ConfigRoutes from './api/routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  timeline: {
    primary: '#5e5c5b',
    nautral: '#5e5c5b',
    main: '#5e5c5b',
  },
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#f0f0f0',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#1f1e1c',
      // dark: will be calculated from palette.secondary.main,
    },
    timeline: {
      main: '#5e5c5b',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiDialog: {
      paper: {
        borderRadius: 10,
      }
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ConfigRoutes />
  </MuiThemeProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
