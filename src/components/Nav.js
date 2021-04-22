import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/albums/new">Create An Album</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/reviews/new">Create A Review</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav