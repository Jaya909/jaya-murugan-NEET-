import {Link} from 'react-router-dom'
import './index.css'

const Signup = () => (
  <div className="login-container">
    <form className="login-card">
      <input type="text" placeholder="NAME" className="input-card" />
      <input type="mail" placeholder="EMAIL" className="input-card" />
      <div>
        <input type="tel" placeholder="PHONE NUMBER" className="input-card" />
        <button type="button" className="login-button">
          SEND OTP
        </button>
      </div>
      <p>
        Didn&apos;t Receive It? <span className="resend-color">RESEND</span>
      </p>
      <input type="tel" placeholder="OTP" className="input-card" />
      <button type="button" className="login-button">
        SIGN UP
      </button>
      <p>
        Already Have An Account?<Link to="/login">log In</Link>
      </p>
    </form>
  </div>
)

export default Signup
