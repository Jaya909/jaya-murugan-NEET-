import {Link} from 'react-router-dom'
import {IoMdMan} from 'react-icons/io'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <h1>Karo Abhayaas</h1>

        <button type="button" className="nav-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-bar-img"
          />
        </button>
      </div>

      <div className="nav-bar-large-container">
        <h1>Karo Abhayaas</h1>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/">
              <button type="button" className="Join-button">
                Join us
              </button>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/classes" className="nav-link">
              Classes
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
        <Link to="/login" className="nav-link">
          <IoMdMan size="30" />
        </Link>
        <Link to="/cart" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
        </Link>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/" className="nav-link">
            <button type="button" className="Join-button">
              Join us
            </button>
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/classes" className="nav-link">
            Classes
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <Link to="/login" className="nav-link">
          <IoMdMan size="30" />
        </Link>
        <li className="nav-menu-item-mobile">
          <Link to="/cart" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
