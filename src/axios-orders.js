import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e7faf.firebaseio.com/'
});

export default instance;