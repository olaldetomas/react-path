import React from 'react'
import NavigationComponent from './components/Navigation/NavigationComponent'
import appStyles from './styles/appStyles'
import CardPathComponent from './components/Path/CardPathComponent'
import { Box } from '@material-ui/core'

function App() {
  const classes = appStyles()

  return (
    <div className={classes.root}>
        <NavigationComponent />
        <Box className={classes.boxContainer}> 
          <CardPathComponent/>
        </Box>
    </div>
  )
}

export default App
