import React, { useState } from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import PathDialogComponent from '../Path/PathDialog/PathDialogComponent'

const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginLeft: 20,
  },
  icon: {
    color: theme.palette.timeline.main,
    fontSize: 30,
  },
}))

export default function NewPathButton() {
  const [open, setOpen] = useState(null)

  const styles = useStyles()

  function openDialog() {
    setOpen(true)
  }

  function closeDialog() {
    setOpen(false)
  }

  return (
    <div>
      <Tooltip title="New path" arrow>
        <IconButton className={styles.iconButton} onClick={openDialog}>
          <AddSharp className={styles.icon} />
        </IconButton>
      </Tooltip>
      {open ? (
        <PathDialogComponent
          open={true}
          closeDialog={closeDialog}
          action={'asd'}
        />
      ) : null}
    </div>
  )
}
