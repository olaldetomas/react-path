import React from 'react'
import Login from './Login'
import { Redirect } from 'react-router-dom'
import { login } from '../../api/api'

class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      userCredentials: {
        email: '',
        password: '',
      },
      redirect: null,
    }
  }

  onSubmit = async (values) => {
    const result = await login(values)
    if (result) {
      this.setState({ redirect: '/dashboard' })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <Login
          email={this.state.userCredentials.email}
          password={this.state.userCredentials.password}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default LoginComponent
