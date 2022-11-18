import axios from 'axios';

//add a new business
export const signup = async (data)=>{
    const result = await axios.post('http://192.168.1.5:8000/api/v1/business',data);
    return result.data.status;
}