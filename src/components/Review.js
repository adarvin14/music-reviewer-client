import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions'

class Review extends Component {

  // handleDelete = () => {
  //   this.props.deleteReview(this.state, this.props.history);
  // }

  render() {
    const { content, album } = this.props.review;
    return (
      <div>
        <h3>{album.artist}: {album.title}</h3>
        <p> { content } </p>
        {/* <button className="button" onClick={this.handleDelete}>Delete Review</button> */}
        ____________________________________________
      </div>
    )
  }
}

//add delete button that effectively destroys the selected review
export default connect(null, { deleteReview })(Review)