import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'

import './index.css'

const Product = () => (
  <div className="products-container">
    <div className="search-bar">
      <AiOutlineSearch />
      <input type="text" placeholder="Search" className="input-search" />
      <AiOutlineMenu />
    </div>
    <div className="product-card">
      <div className="video-product"> </div>
      <div className="product-card-text">
        <div>
          <h2>Sample Video Title</h2>
          <p>
            Without education a society will be socially, economically and
            politically backward. Education is what serves to make a nation
            strong, capable, powerful and resilient, and take it forward.
            Education is, therefore, very important for every individual person,
            and as a whole for every society and nation.
          </p>
        </div>
        <div>
          <h3>1500 Rs</h3>
          <button type="button" className="practice-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div className="product-card">
      <div className="video-product"> </div>
      <div className="product-card-text">
        <div>
          <h2>Sample Video Title</h2>
          <p>
            Without education a society will be socially, economically and
            politically backward. Education is what serves to make a nation
            strong, capable, powerful and resilient, and take it forward.
            Education is, therefore, very important for every individual person,
            and as a whole for every society and nation.
          </p>
        </div>
        <div>
          <h3>1500 Rs</h3>
          <button type="button" className="practice-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div className="product-card">
      <div className="video-product"> </div>
      <div className="product-card-text">
        <div>
          <h2>Sample Video Title</h2>
          <p>
            Without education a society will be socially, economically and
            politically backward. Education is what serves to make a nation
            strong, capable, powerful and resilient, and take it forward.
            Education is, therefore, very important for every individual person,
            and as a whole for every society and nation.
          </p>
        </div>
        <div>
          <h3>1500 Rs</h3>
          <button type="button" className="practice-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Product
