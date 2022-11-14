import axios from "axios";
import { baseURL } from "./base";

//add new user
export const register = async(data)=>{
    try{
        const result = await axios.post(baseURL,data);
        return result.data.status;
    }catch(error){
        console.log(error);
    }    
}