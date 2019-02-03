import axios from 'axios';

export default  axios.create({
    baseURL : `https://api.unsplash.com`,
    headers : {
        Authorization : `Client-ID afda5edeac0203a0ed40fd1c6b8191a4cac6fb503d144e0a01fb4973d04f7286`
    } 
});