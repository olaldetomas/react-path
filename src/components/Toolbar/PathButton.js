import React, { useState, useContext } from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import PathDialog from '../Path/PathDialog/PathDialog'
import { createPath } from '../../api/api'
import PathContext from '../../context/PathContext'

const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginLeft: 20,
  },
  icon: {
    color: theme.palette.timeline.main,
    fontSize: 30,
  },
}))

export default function PathButton() {
  const styles = useStyles()
  const { paths, setPaths } = useContext(PathContext)
  const [open, setOpen] = useState(false)


  function closeDialog() {
    setOpen(false)
  }

  function openDialog() {
    setOpen(true)
  }

  async function onSubmit(values) {
    const path = await createPath(values)
    console.log(paths)
    setPaths(paths.push(path))
    console.log(paths)
    closeDialog()
  }

  return (
    <div>
      <Tooltip title="New path" arrow>
        <IconButton className={styles.iconButton} onClick={openDialog}>
          <AddSharp className={styles.icon} />
        </IconButton>
      </Tooltip>
      <PathDialog
        open={open}
        closeDialog={closeDialog}
        action={'New path'}
        onSubmit={onSubmit}
      />
    </div>
  )
}
