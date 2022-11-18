import axios from "axios";

//login user
export const login = async (post)=>{
    try{
        const data = await axios.post('http://192.168.1.5:8000/api/v1/login',post);
        return data.data;      
    }catch(error){
       console.log(error);
    }   
}


