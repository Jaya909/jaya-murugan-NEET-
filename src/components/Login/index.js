import {Link} from 'react-router-dom'
import './index.css'

const Login = () => (
  <div className="login-container">
    <form className="login-card">
      <input type="text" placeholder="USERNAME" className="input-card" />
      <input type="password" placeholder="PASSWORD" className="input-card" />
      <button type="button" className="login-button">
        LOGIN
      </button>
      <p>
        Don&apos;t have an account?<Link to="/signup">Sign Up</Link>
      </p>
    </form>
  </div>
)

export default Login
