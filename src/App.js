import React, { Component } from 'react'

import createDrunk from './components/drunk'
import './App.css'

const DrunkA = createDrunk('drunkA')
const DrunkB = createDrunk('drunkB')
const DrunkC = createDrunk('drunkC')

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="row">
          <DrunkA />
          <DrunkB />
          <DrunkC />
        </div>
      </div>
    )
  }
}

export default App
