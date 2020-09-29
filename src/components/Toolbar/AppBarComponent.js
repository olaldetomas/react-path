import React from 'react'
import AppBar from './AppBar'

export default function AppBarComponent(props) {
  function handleSearch(event) {
    const value = event.target.value
    if (value.length >= 3) {
      console.log(value)
      // call api
    }
  }

  return <AppBar handleSearch={handleSearch} />
}
