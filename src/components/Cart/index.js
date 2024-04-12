import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Cart = () => (
  <div className="cart-container">
    <div className="cart-card">
      <h2>TOTAL:2000 Rs</h2>
      <Popup
        modal
        trigger={
          <button type="button" className="login-button">
            CHECKOUT
          </button>
        }
      >
        {close => (
          <>
            <div>
              <p>Please provide your Address</p>
              <input type="text" className="pop-card" />
            </div>
            <button
              type="button"
              className="save-button"
              onClick={() => close()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="save-button"
              onClick={() => close()}
            >
              Save
            </button>
          </>
        )}
      </Popup>
    </div>
    <hr />
    <div className="cart-product">
      <div>
        <h3>QUESTION TITLE</h3>
        <p>
          <span className="span-element">MODULE: </span>NAME OF MODULE
        </p>
        <p>
          <span className="span-element">Date: </span>10/04/2021
        </p>
      </div>
      <div>
        <select className="delete-button">
          <option>1</option>
          <option>2</option>
        </select>
        <br />
        <Popup
          modal
          trigger={
            <button type="button" className="login-button">
              DELETE
            </button>
          }
        >
          {close => (
            <>
              <h2>DELETE BOOK FROM CART?</h2>
              <button
                type="button"
                className="save-button"
                onClick={() => close()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="save-button"
                onClick={() => close()}
              >
                DELETE
              </button>
            </>
          )}
        </Popup>
      </div>
    </div>
  </div>
)

export default Cart
