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
          reviews: [...state.review, action.review]
        }
      default:
        return state;
    }
  }
  
  export default reviewsReducer;