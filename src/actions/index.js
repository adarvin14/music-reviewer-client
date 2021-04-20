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
            body: JSON.stringify({ review })
        })
            .then(resp => resp.json())
            .then(review => {
                dispatch({ type: "ADD_REVIEW", review })
                history.push("/reviews")
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
                dispatch({ type: "DELETE_REVIEW", review })
                history.push("/reviews")
            })
    }
}

export const editReview = (review, history) => {
    return dispatch => {
        fetch('http://localhost:3001/reviews', {
            method: "UPDATE",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ review })
        })
            .then(resp => resp.json())
            .then(review => {
                dispatch({ type: "EDIT_REVIEW", review })
                history.push("/reviews")
            })
    }
}