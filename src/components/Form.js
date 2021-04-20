import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addReview } from '../actions';

class Form extends Component {
  state = {
    artist: "",
    album: "",
    content: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.addReview(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h3>Create Review</h3>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="artist">Artist </label>
            <input type="text" id="artist" name="artist" value={ this.state.artist } onChange={ this.handleChange } />
          </div>
          <br />
          <div>
            <label htmlFor="album">Album </label>
            <input type="text" id="album" name="album" value={ this.state.album } onChange={ this.handleChange } />
          </div>
          <br />
          <div>
            <p><label htmlFor="content">Review</label></p>
            <textarea id="content" name="content" value={ this.state.content } onChange={ this.handleChange }></textarea>
          </div>
          <br />
          <input type="submit" value="Create Review" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addReview })(Form)