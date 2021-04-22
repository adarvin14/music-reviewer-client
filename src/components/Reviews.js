import React, { Component } from 'react'
import { connect } from 'react-redux';
import Review from './Review';
import { getReviews } from '../actions';

class Reviews extends Component {

  componentDidMount() {
    this.props.getReviews();
  }

  render() {
    const reviews = this.props.reviews.map((review, i) => <Review key={i} review={review} />)

    return (
      <div>
        { reviews}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.review.reviews
  }
}

export default connect(mapStateToProps, { getReviews })(Reviews);