import React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import { AddSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
// import PathDialog from '../Path/PathDialog/PathDialog'
// import { createPath } from '../../api/api'
// import PathContext from '../../context/PathContext'
import { useHistory } from 'react-router-dom'

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
  let history = useHistory();

  // const { paths, setPaths } = useContext(PathContext)
  // const [open, setOpen] = useState(false)

  // function closeDialog() {
  //   setOpen(false)
  // }

  // function openDialog() {
  //   setOpen(true)
  // }

  // const onSubmit = async (values) => {
  //   const path = await createPath(values)
  //   paths.push(path)
  //   setPaths([...paths])
  //   closeDialog()
  // }

  const newPath = () => {
    history.push("/path");
  }

  return (
    <div>
      <Tooltip title="New path" arrow>
        <IconButton
          className={styles.iconButton}
          onClick={newPath}
        >
          <AddSharp className={styles.icon} />
        </IconButton>
      </Tooltip>
      {/* <PathDialog
        open={open}
        closeDialog={closeDialog}
        action={'New path'}
        onSubmit={onSubmit}
      /> */}
    </div>
  )
}
