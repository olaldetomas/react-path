import React from 'react'
import NavigationComponent from './components/Navigation/NavigationComponent'
import appStyles from './styles/appStyles'
import CardPath from './components/Path/CardPath'
import { Box } from '@material-ui/core'

function App() {
  const classes = appStyles()

  return (
    <div className={classes.root}>
        <NavigationComponent />
        <Box className={classes.boxContainer}> 
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
          <CardPath />
        </Box>
    </div>
  )
}

export default App
