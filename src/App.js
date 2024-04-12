import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import CoursesContext from './context/CoursesContext'
import Header from './components/Header'
import Home from './components/Home'
import Classes from './components/Classes'
import Product from './components/Products'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  state = {
    ToppersList: ['1 : Amit Jha', '2 : Amit Jha', '3 : Amit Jha'],
    TopStudentsList: [
      {
        name: 'Amit Jha',
        description:
          'Some review Submitted by students by the user about the company',
      },
      {
        name: 'Amit Jha',
        description:
          'Some review Submitted by students by the user about the company',
      },
      {
        name: 'Amit Jha',
        description:
          'Some review Submitted by students by the user about the company',
      },
      {
        name: 'Amit Jha',
        description:
          'Some review Submitted by students by the user about the company',
      },
    ],
  }

  addToList = student => {
    this.setState(prevState => ({
      ToppersList: [...prevState.ToppersList, student],
    }))
  }

  render() {
    const {ToppersList, TopStudentsList} = this.state
    return (
      <CoursesContext.Provider
        value={{ToppersList, addToList: this.addToList, TopStudentsList}}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CoursesContext.Provider>
    )
  }
}

export default App
