import axios from 'axios';
const KEY = '213dasd';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    KEY: KEY
  }


});