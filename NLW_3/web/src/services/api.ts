import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw03backend.herokuapp.com',
})

export default api;