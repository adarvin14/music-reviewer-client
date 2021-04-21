import React, { Component } from 'react'
import { connect } from 'react-redux';
import Album from './Album';

class Albums extends Component {
  render() {
    const albums = this.props.albums.map( (album, i) => <Album key={i} name={ album.name } />)

    return (
      <div>
        { albums }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(Albums);