import React, { Component } from 'react'

class Review extends Component {
  render() {
    const { artist, album, content } = this.props;
    return (
      <div>
        <h3>{ album }: { artist }</h3>
        <p> { content }</p>
      </div>
    )
  }
}

export default Review