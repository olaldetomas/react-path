import React, { useContext, useEffect } from 'react'
import CardPathComponent from './Card/CardPathComponent'
import { Box } from '@material-ui/core'
import PathContext from '../../context/PathContext'
import { makeStyles } from '@material-ui/core/styles'
import { getPaths } from '../../api/api'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0,
    paddingRight: 0,
  },
}))

function PathContainer() {
  const { paths, setPaths } = useContext(PathContext)
  const classes = useStyles()

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
    <Box className={classes.boxContainer}>
      {paths.length >= 1
        ? paths.map((path) => <CardPathComponent path={path} key={path._id} />)
        : null}
    </Box>
  )
}

export default PathContainer
