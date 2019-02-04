import axios from 'axios';

const API_KEY = 'AIzaSyAhbleoX93SdQwk5gM5TfxW0MEuCPPcD5I';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 10,
        key : API_KEY
    }
});