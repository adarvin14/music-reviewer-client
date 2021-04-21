import React, { Component } from 'react'
import { connect } from 'react-redux'

class Album extends Component {

  render() {
    const { title } = this.props;
    return (
      <div>
        <h3>{ title }</h3>
        <p> { this.review }</p>
        
      </div>
    )
  }
}

//add edit button at the end of each review that redirects to form page

export default Album