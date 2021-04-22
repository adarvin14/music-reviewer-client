import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addReview, getAlbums } from '../actions';

class Form extends Component {
  state = {
    title: "",
    content: ""
  }

  componentDidMount() {
    this.props.getAlbums();
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
    const { albums } = this.props;
    const { title, content } = this.state;
    return (
      <div>
        <h3>Create Review</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Album Title </label>
            <select value={title} name="title" onChange={this.handleChange}>
              <option value="">Select Album</option>
              {albums.map(album => <option key={album.id} value={album.id}>{album.title}</option>)}
            </select>
          </div>
          <br />
          <div>
            <p><label htmlFor="content">Review</label></p>
            <textarea id="content" name="content" value={content} onChange={this.handleChange}></textarea>
          </div>
          <br />
          <input type="submit" value="Create Review" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.album.albums
})

export default connect(mapStateToProps, { addReview, getAlbums })(Form)