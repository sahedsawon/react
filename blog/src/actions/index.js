import JSONPlaceHolder from '../API/JSONPlaceHolder';

export const fetchPost = () =>  async dispatch => {
    const response = await JSONPlaceHolder.get(`/posts`);

    dispatch({type: 'FETCH_POSTS', payload : response.data})
}


export const fetchUser = (id) => async dispatch => {
    const response = await JSONPlaceHolder.get(`/users/${id}`);
    dispatch({type : 'FETCH_USER',payload : response.data});
}   

