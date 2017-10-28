import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <div>Welcome!</div>
        <button onClick={() => console.log('hi there')}>Press me!</button>
      </div>
    )
  }
}

export default Home
