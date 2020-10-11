import React, { useState } from 'react'
import NavigationComponent from './components/Navigation/NavigationComponent'
import appStyles from './styles/appStyles'
import { Box } from '@material-ui/core'
import AppBarComponent from './components/Toolbar/AppBarComponent'
import PathContext from './context/PathContext'
import PathContainer from './components/Path/PathContainer'

function App() {
  const [paths, setPaths] = useState([])
  const classes = appStyles()


  return (
    <div className={classes.root}>
      <NavigationComponent />
      <Box>
        <PathContext.Provider value={{ paths, setPaths }}>
          <AppBarComponent />
          <PathContainer />
        </PathContext.Provider>
      </Box>
    </div>
  )
}

export default App
