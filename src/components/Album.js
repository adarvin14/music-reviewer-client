import React, { Component } from 'react'

class Album extends Component {

    // handleDeleteAlbum = (event) => {
    //     console.log(this.props)
    //     this.props.deleteAlbum(this.props.id);
    //     this.props.history.push("/");
    // }

    render() {
        const { title, artist, release_year } = this.props.album;
        return (
            <div>
                <h3>{title} - {artist}: {release_year}</h3>
                {/* <button className="button" onClick={this.handleDeleteAlbum}>Delete Album</button> */}
                ____________________________________________
            </div>
        )
    }
}

//add delete button at the end of each album that effectively deletes selected album and re-renders page

export default Album