import axios from 'axios';

const API = axios.create({
    baseURL: 'https://battlefield-4-server-info.onrender.com/serverInfo', // Backend URL 
});

// Get all products
export const getDetails = () => API.get('/');
