import React, { Component } from 'react'

class Review extends Component {
  render() {
    const { artist, album, content } = this.props;
    return (
      <div>
        <h3>{ artist }</h3>
        <h3>{ album }</h3>
        <p> { content }</p>
      </div>
    )
  }
}

export default Review