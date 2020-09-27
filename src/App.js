import React from 'react'
import './styles/App.css'
import NavigationComponent from './components/Navigation/NavigationComponent'
import { makeStyles } from '@material-ui/core/styles'
import CardPath from './components/Path/CardPath'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))


function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <NavigationComponent />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CardPath />
        <CardPath />
      </main>
    </div>
  )
}

export default App
