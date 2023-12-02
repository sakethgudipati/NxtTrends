import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isPasswordWrong: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  isPasswordWrong = errMsg => {
    this.setState({isPasswordWrong: true, errorMsg: errMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.isPasswordWrong(data.error_msg)
    }
  }

  render() {
    const {isPasswordWrong, errorMsg} = this.state
    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <form className="login-form" onSubmit={this.onSubmitLogin}>
            <label htmlFor="username" className="label-element">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="input-element"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label-element">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="input-element"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {isPasswordWrong && <p className="error-msg">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
