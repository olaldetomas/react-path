import React from 'react'
import PathDialog from './PathDialog'

export default function PathDialogComponent(props) {

  // const [open, setOpen] = useState(props.open)

  // function closeDialog() {
  //   setOpen(false)
  // }

  return (
    <PathDialog
      open={props.open}
      closeDialog={props.closeDialog}
      action={props.action}
    />
  )
}
