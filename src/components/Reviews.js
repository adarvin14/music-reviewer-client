import React, { Component } from 'react'
import { connect } from 'react-redux';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map( (review, i) => <Review key={i} artist={ review.artist } album={review.album} content={ review.content } />)

    return (
      <div>
        { reviews }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Review);