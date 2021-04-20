import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { deleteReview } from '../actions/index'

class Review extends Component {

  handleDelete = (event) => {
    this.props.removeRecipe(this.props.review.id);
    this.props.history.push("/");
  }

  render() {
    const { artist, album, content } = this.props;
    return (
      <div>
        <h3>{ album }: { artist }</h3>
        <p> { content }</p>
        <button className="button" onClick={this.handleDelete}>Delete Review</button>
      </div>
    )
  }
}

//add edit button at the end of each review that redirects to form page
//add delete button that effectively destroys the selected review
export default Review