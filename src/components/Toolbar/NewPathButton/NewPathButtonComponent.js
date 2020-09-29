import React from 'react'
import NewPathButton from './NewPathButton'

export default function NewPathButtonComponent() {

  function newPath() {
    console.log('newPath')
  }

  return <NewPathButton newPath={newPath} />
}
