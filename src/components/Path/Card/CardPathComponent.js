import React, { useState } from 'react'
import CardPath from './CardPath'

export default function CardPathComponent(props) {
 
  const [path, setPath] = useState(props.path)

  function onFav() {
    setPath({
      ...path,
      isFavourite: !path.isFavourite,
    })
  }

  function onEdit() {
    return console.log('EDIT')
  }

  function onBookmark() {
    return console.log('BOOKMARK')
  }

  return <CardPath path={path} onFav={onFav} onEdit={onEdit} onBookmark={onBookmark} />
}
