import React from 'react'
import CardPathComponent from './Card/CardPathComponent'
import { Box } from '@material-ui/core'
// import PathContext from '../../context/PathContext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0,
    paddingRight: 0,
  },
}))

function PathContainer(props) {
  // const { paths } = useContext(PathContext)
  const classes = useStyles()

  return (
    <Box className={classes.boxContainer}>
      {props.paths.length >= 1
        ? props.paths.map((path) => <CardPathComponent path={path} key={path._id} />)
        : null}
    </Box>
  )
}

export default PathContainer
