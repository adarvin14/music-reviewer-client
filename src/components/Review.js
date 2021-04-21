import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions'

class Review extends Component {

  handleDelete = (event) => {
    console.log(this.props)
    this.props.deleteReview(this.props.id);
    this.props.history.push("/");
  }

  render() {
    const { artist, album, content } = this.props;
    return (
      <div>
        <h3>{ artist }: { album }</h3>
        <p> { content }</p>
        <button className="button" onClick={this.handleDelete}>Delete Review</button>
      </div>
    )
  }
}

//add delete button that effectively destroys the selected review
export default connect(null, { deleteReview })(Review)