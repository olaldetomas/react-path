import React from 'react'
import Navigation from './Navigation'

export default function NavigationComponent() {
  const links = [
    {
      id: 1,
      title: 'My Paths',
      route: '/dashboard',
    },
    {
      id: 2,
      title: 'Order By Tag',
      route: '/dashboard',
    },
    {
      id: 3,
      title: 'Other Paths',
      route: '/dashboard',
    },
  ]

  return <Navigation links={links} />
}
