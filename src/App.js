import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="horizontal-scroll-wrapper rectangles">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
        </div>
      </div>
    )
  }
}

export default App;
