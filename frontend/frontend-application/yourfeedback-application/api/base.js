import axios from 'axios';

//define the base url to be used
const baseURL = 'http://192.168.1.5:8000/api/v1/user';

export default(token)=>{
    return axios.create(
        {
            baseURL: baseURL,
            headers:{
                'Authorization':  `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': "*",
                'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
                'Access-Control-Allow-Credentials': true,
                'Content-Type': "multipart/form-data",
                'Accept': "application/json",
            }
        }
    )}        
