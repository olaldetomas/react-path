import React, { useEffect, useState } from 'react'
import NavigationComponent from './components/Navigation/NavigationComponent'
import appStyles from './styles/appStyles'
import { Box } from '@material-ui/core'
import AppBarComponent from './components/Toolbar/AppBarComponent'
import PathContext from './context/PathContext'
import { getPaths } from './api/api'
import PathContainer from './components/Path/PathContainer'

function App() {
  const [paths, setPaths] = useState([])
  const classes = appStyles()

  const init = async () => {
    const data = await getPaths()
    setPaths(data)
  }

  useEffect(() => {
    if (paths.length <= 0) {
      init()
    }
  })

  return (
    <div className={classes.root}>
      <NavigationComponent />
      <Box>
        <PathContext.Provider value={{ paths, setPaths }}>
          <AppBarComponent />
          <PathContainer paths={paths}/>
        </PathContext.Provider>
      </Box>
    </div>
  )
}

export default App
