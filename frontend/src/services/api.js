import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/serverInfo', // Backend URL 
});

// Get all products
export const getDetails = () => API.get('/');
