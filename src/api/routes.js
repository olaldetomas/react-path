import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../App'
import LoginComponent from '../components/Login/LoginComponent'

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