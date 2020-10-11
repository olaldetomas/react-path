import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../App'
import LoginComponent from '../components/Login/LoginComponent'
import Path from '../components/Path/Path'

const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: App,
  },
  {
    path: '/login',
    exact: true,
    component: LoginComponent,
  },
  {
    path: '/path',
    exact: true,
    component: Path,
  }
]

export default function ConfigRoutes() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  )
}