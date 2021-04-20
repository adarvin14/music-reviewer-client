import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { deleteReview } from '../actions/index'

class Review extends Component {
  render() {
    const { artist, album, content } = this.props;
    return (
      <div>
        <h3>{ album }: { artist }</h3>
        <p> { content }</p>
        <button>Edit</button>
        <button>Delete Review</button>
      </div>
    )
  }
}

//add edit button at the end of each review that redirects to form page
//add delete button that effectively destroys the selected review
export default Review