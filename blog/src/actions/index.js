import JSONPlaceHolder from '../API/JSONPlaceHolder';

export const fetchPost = () => {
    return async function(dispatch,getState) {
       const response = await JSONPlaceHolder.get(`/posts`);
        return {
            type: 'FETCH_POSTS',
            payload : response
        }
    }
   
}

