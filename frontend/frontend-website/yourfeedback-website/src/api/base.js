import axios from "axios";

//get token from local storage
const token =localStorage.getItem('token');

//define the base url to be used
export const baseURL = 'http://127.0.0.1:8000/api/v1/business';

//define headers 
axios.defaults.headers = {
    'Authorization': `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers':'Content-Type',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Credentials': true
}