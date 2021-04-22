export const getReviews = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/reviews")
            .then(resp => resp.json())
            .then(reviews => dispatch({ type: "SET_REVIEWS", reviews }))
    }
}

export const addReview = (review, history) => {
    return dispatch => {
        fetch('http://localhost:3001/reviews', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...review, album_id: review.title })
        })
            .then(resp => resp.json())
            .then(review => {
                console.log('review==>>', review);
                dispatch({ type: "ADD_REVIEW", review })
                history.push("/reviews")
            }).catch(err => {
                console.log('err occurred==>>', err);
            })
    }
}

export const deleteReview = (review, history) => {
    return dispatch => {
        fetch('http://localhost:3001/reviews', {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ review })
        })
            .then(resp => resp.json())
            .then(review => {
                dispatch({ type: "DELETE_REVIEWS", review })
                history.push("/reviews")
            })
    }
}

// export const editReview = (review, history) => {
//     return dispatch => {
//         fetch('http://localhost:3001/reviews', {
//             method: "UPDATE",
//             headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ review })
//         })
//             .then(resp => resp.json())
//             .then(review => {
//                 dispatch({ type: "EDIT_REVIEW", review })
//                 history.push("/reviews")
//             })
//     }
// }

export const getAlbums = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/albums")
            .then(resp => resp.json())
            .then(albums => dispatch({ type: "SET_ALBUMS", albums }))
    }
}

export const addAlbum = (album, history) => {
    return dispatch => {
        fetch('http://localhost:3001/albums', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ album })
        })
            .then(resp => resp.json())
            .then(album => {
                dispatch({ type: "ADD_ALBUM", album })
                history.push("/albums")
            })
    }
}

// export const deleteReview = (review, history) => {
//     return dispatch => {
//         fetch('http://localhost:3001/reviews', {
//             method: "DELETE",
//             headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ review })
//         })
//             .then(resp => resp.json())
//             .then(review => {
//                 dispatch({ type: "DELETE_REVIEWS", review })
//                 history.push("/reviews")
//             })
//     }
// }