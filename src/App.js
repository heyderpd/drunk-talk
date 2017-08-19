import React, { Component } from 'react'

import createDrunk from './components/drunk'
import './App.css'

const Maria = createDrunk('Maria')
const Enzo = createDrunk('Enzo')
const Jose = createDrunk('Jose')

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="row">
          <Maria />
          <Enzo />
          <Jose />
        </div>
      </div>
    )
  }
}

export default App
