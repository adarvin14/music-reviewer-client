import React, { Component } from 'react'

class Album extends Component {

  render() {
    const { title, artist, release_year } = this.props.album;
    return (
      <div>
        <h3>{ title } - { artist }: { release_year }</h3>

        
      </div>
    )
  }
}

//add edit button at the end of each review that redirects to form page

export default Album