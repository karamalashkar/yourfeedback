import axios from "axios";

//make http request to check email and password before login
export const login = async (data)=>{
    const result = await axios.post('http://192.168.1.5:8000/api/v1/business_login',data);
    return result.data;
}