import React, { Component } from 'react'
import { connect } from 'react-redux';
import Album from './Album';
import { getAlbums } from '../actions';

class Albums extends Component {

    componentDidMount() {
        this.props.getAlbums();
    }

    render() {
        const albums = this.props.albums.map((album, i) => <Album key={i} album={album} />)

        return (
            <div>
                { albums}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.album.albums
    }
}

export default connect(mapStateToProps, { getAlbums })(Albums);