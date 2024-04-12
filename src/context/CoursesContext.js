import React from 'react'

const CourseContext = React.createContext({
  ToppersList: [1, 2, 3, 4],
  TopStudentsList: [
    {
      name: 'Amit Jha',
      description:
        'Some review Submitted by students by the user about the company',
    },
  ],

  addToList: () => {},
})

export default CourseContext
