import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAlbum } from '../actions';

class Form extends Component {
    state = {
        artist: "",
        title: "",
        release_year: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addAlbum(this.state, this.props.history);
    }

    render() {
        const { title, release_year, artist } = this.state;
        return (
            <div>
                <h3>Create An Album You Would Like To Review!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p><label htmlFor="title">Title</label></p>
                        <input id="title" name="title" value={title} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="artist">Artist</label></p>
                        <input id="artist" name="artist" value={artist} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="release_year">Release Year</label></p>
                        <input type="number" id="release_year" name="release_year" value={release_year} onChange={this.handleChange} />
                    </div>
                    <br />
                    <input type="submit" value="Create Album" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addAlbum })(Form)