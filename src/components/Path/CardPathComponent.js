import React, { useState } from 'react'
import CardPath from './CardPath'

export default function CardPathComponent() {
  const model = {
    id: 1,
    title: 'Titulo 1',
    description: 'Bueno voy a probar de escribr una descripcion medio lague recien ya que no se como se va a ver la partedl bootom y ',
    favourite: false,
    marker: {
      id: 1,
      color: '#43a047',
      name: 'Node.js'
    }
  }

  const [path, setPath] = useState(model)

  function onFav() {
    setPath({
      ...path,
      favourite: !path.favourite,
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
