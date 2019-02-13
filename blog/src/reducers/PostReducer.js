import {combineReducers} from 'redux';
export const PostReducer = (state=[],action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    PostReducer
});