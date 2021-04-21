import React, { Component } from 'react';
import Albums from '../components/Albums';

import Container from 'react-bootstrap/Container';


class AlbumsContainer extends Component {
    
    
    render() {
        return (
            <div>
                <Container className="albumsContainer">
                    <h1>Here's The List of Your Reviews!</h1>
                    <Albums />
                </Container>
            </div>
        )
    }
}


export default AlbumsContainer;
