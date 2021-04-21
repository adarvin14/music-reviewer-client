import React, { Component } from 'react';
import Reviews from '../components/Index';

import Container from 'react-bootstrap/Container';


class ReviewsContainer extends Component {
    
    
    render() {
        return (
            <div>
                <Container className="reviewsContainer">
                    <h1>Here's The List of Your Reviews!</h1>
                    <Reviews />
                </Container>
            </div>
        )
    }
}


export default ReviewsContainer;
