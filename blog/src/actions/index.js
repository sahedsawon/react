import {combineReducers} from 'redux';
import JSONPlaceHolder from '../API/JSONPlaceHolder';

const fetchPost = () => {
    return async function(dispatch,getState) {
       const response = await JSONPlaceHolder.get(`/posts`);
        return {
            type: 'FETCH_POSTS',
            payload : response
        }
    }
   
}

export default combineReducers({
    fetchPost
});