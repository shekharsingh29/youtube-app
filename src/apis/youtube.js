import Axios from 'axios';

const KEY = 'AIzaSyBO8zRF3argzeI2XgfoCC7jTPnL2warBoU';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});