const initialState = {
  reviews: [],
  loading: true
}
  
const reviewsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "SET_REVIEWS":
      return {
        ...state,
        loading: false,
        reviews: action.reviews
      }
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.review]
      }
    case "DELETE_REVIEW":
      let deleteReview = state.reviews.map(review => {
        if (review.id === action.payload.id) {
        return action.payload
        } else {
        return review
        }
    })
    return {...state, reviews: deleteReview}
    case "EDIT_REVIEW":
      let reviewEdit = state.reviews.map(review => {
        if (review.id === action.payload.id) {
        return action.payload
        } else {
        return review
        }
    })
    return {...state, reviews: reviewEdit}
  default:
    return state
  }
}
  
export default reviewsReducer;