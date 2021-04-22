const initialState = {
    albums: [],
    loading: true
}
    
const albumsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_ALBUMS":
            return {
                ...state,
                loading: false,
                albums: action.albums
            }
        case "ADD_ALBUM":
            return {
                ...state,
                albums: [...state.albums, action.album]
            }
        case "DELETE_ALBUM":
            let deleteAlbum = state.albums.map(album => {
                if (album.id === action.payload.id) {
            return action.payload
                } else {
            return album
            }
        })
        return {...state, albums: deleteAlbum}
        case "EDIT_ALBUM":
            let albumEdit = state.albums.map(album => {
                if (album.id === action.payload.id) {
            return action.payload
                } else {
            return album
            }
        })
        return {...state, albums: albumEdit}
    default:
        return state
    }
}
    
  export default albumsReducer;