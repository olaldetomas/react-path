import React, { useState } from 'react'
import PathDialog from './PathDialog'
import { createPath } from '../../../api/api'

export default function PathDialogComponent(props) {
  const [open, setOpen] = useState(props.open)

  const markers = [
    { name: 'uno', id: '1124' },
    { name: 'dos', id: '23512352' },
    { name: 'tres', id: '312351' },
    { name: 'cuatro', id: '4123512531' },
  ]

  function closeDialog() {
    setOpen(false)
  }

  async function onSubmit(values) {
    const result = await createPath(values)
    console.log(result)
    closeDialog()
  }

  return (
    <PathDialog
      open={open}
      closeDialog={closeDialog}
      action={props.action}
      onSubmit={onSubmit}
      markers={markers}
    />
  )
}
