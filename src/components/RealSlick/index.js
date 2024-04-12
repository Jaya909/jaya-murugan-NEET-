import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CoursesContext from '../../context/CoursesContext'

import './index.css'

const ReactSlick = () => (
  <CoursesContext.Consumer>
    {value => {
      const {ToppersList} = value
      const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {ToppersList.map(each => (
              <div key={each}>
                <h1>{each}</h1>
              </div>
            ))}
          </Slider>
        </div>
      )
    }}
  </CoursesContext.Consumer>
)

export default ReactSlick
