import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

//define the base url to be used
export const baseURL = 'http://192.168.1.5:8000/api/v1/user';

//get token from async storage
const getToken = async()=>{
    const token=await AsyncStorage.getItem('token');
    return token;
}

const token=getToken();

//define headers 
axios.defaults.headers = {
    'Authorization': `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': "multipart/form-data",
    'Accept': "application/json",
}