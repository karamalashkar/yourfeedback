import axios from 'axios';

//add new user
export const register = async(data)=>{
    try{
        const result = await axios.post('http://192.168.1.5:8000/api/v1/user',data);
        return result.data.status;
    }catch(error){
        console.log(error);
    }    
}