import {combineReducers} from 'redux';
import album from './albumsReducer';
import review from './reviewsReducer';

const reducers = combineReducers({
    album, review
});

export default reducers;