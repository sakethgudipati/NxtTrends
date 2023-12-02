import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-element">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="home-logo"
        alt="website logo"
      />

      <div className="header">
        <Link to="/" className="item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="icon"
            alt="nav home"
          />
          <p className="header-text">Home</p>
        </Link>
        <Link to="/products" className="item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="icon"
            alt="nav home"
          />
          <p className="header-text">Products</p>
        </Link>
        <Link to="/cart" className="item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="icon"
            alt="nav home"
          />
          <p className="header-text">Cart</p>
        </Link>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="button-icon"
            alt="nav logout"
          />
          <p className="button-text">Logout</p>
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
