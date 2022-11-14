import axios from "axios";
import { baseURL } from "./base";

//get feedback made by user
export const getFeedback = async(id)=>{
    try{
        const result=await axios.get(`${baseURL}/feedback/${id}`);
        return result.data;
    }catch(error){
        console.log(error);
    }
    
}