import React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import useStyles from '../styles'

export default function NewPathButton(props) {
  const styles = useStyles()

  return (
    <Tooltip title="New path" arrow>
      <IconButton className={styles.iconButton} onClick={props.newPath}>
        <AddSharp className={styles.icon} />
      </IconButton>
    </Tooltip>
  )
}
