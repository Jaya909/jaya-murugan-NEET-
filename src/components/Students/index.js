import CoursesContext from '../../context/CoursesContext'
import './index.css'

const Students = () => (
  <CoursesContext.Consumer>
    {value => {
      const {TopStudentsList} = value
      return (
        <div className="top-students-list">
          {TopStudentsList.map(each => (
            <div className="top-students-list-container">
              <div>
                <h1>{each.name}</h1>
                <p>{each.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }}
  </CoursesContext.Consumer>
)

export default Students
