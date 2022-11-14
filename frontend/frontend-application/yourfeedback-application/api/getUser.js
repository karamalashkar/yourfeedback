import axios from "axios";
import { baseURL } from "./base";

//get user by id
export const getUser = async(id)=>{
    try{
        const result=await axios.get(`${baseURL}/${id}`);
        return result.data;
    }catch(error){
        console.log(error);
    }
    
}