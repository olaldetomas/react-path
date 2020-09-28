import React, { useState } from 'react'
import CardPath from './CardPath'


export default function CardPathComponent() {
  const model = {
    id: 1,
    title: 'Titulo 1',
    description: 'descripcion ashkjdfb asjnajn sdajk asdfjk asdfjk sdjk',
    favourite: false
  }

  const [path, setPath] = useState(model)
  
  function onFav() {
    setPath({
        ...path,
        favourite: !path.favourite
    }
    )
    return console.log(path)
  }

  function onEdit() {
    return console.log('EDIT')
  }


  return <CardPath path={path} onFav={onFav} onEdit={onEdit}/>
}
