import React, { Component } from 'react'
import Button from './Button'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Button/>
        <h1>Welcome To Music Reviewer!</h1>

        <p>Use the Navigation Bar at the top to begin creating your reviews or edit reviews you have already made!</p>
      </div>
    )
  }
}

export default Home