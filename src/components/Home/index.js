import {Component} from 'react'
import RealSlick from '../RealSlick'
import Students from '../Students'
import Reviews from '../Reviews'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <RealSlick />
        <div>
          <h2 className="text-center">Top Students</h2>
          <Students />
          <h2 className="text-center">Reviews</h2>
          <Reviews />
        </div>
      </div>
    )
  }
}

export default Home
