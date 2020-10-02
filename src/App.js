import React from 'react'
import NavigationComponent from './components/Navigation/NavigationComponent'
import appStyles from './styles/appStyles'
import CardPathComponent from './components/Path/Card/CardPathComponent'
import { Box } from '@material-ui/core'
import AppBarComponent from './components/Toolbar/AppBarComponent'

function App() {
  const classes = appStyles()

  return (
    <div className={classes.root}>
      <NavigationComponent />
      <Box>
        <AppBarComponent />
        <Box className={classes.boxContainer}>
          <CardPathComponent />
        </Box>
      </Box>
    </div>
  )
}

export default App
