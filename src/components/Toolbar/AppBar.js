import React from 'react'
import { TextField } from '@material-ui/core'
import PathButton from './PathButton'
import useStyles from './styles'

export default function AppBar(props) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <TextField
        className={styles.textField}
        name="searchField"
        variant="outlined"
        type="text"
        placeholder="Search by title"
        onChange={props.handleSearch}
      />
      <PathButton />
    </div>
  )
}
