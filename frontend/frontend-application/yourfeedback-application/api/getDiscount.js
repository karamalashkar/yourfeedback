import axios from "axios";
import { baseURL } from "./base";

//get feedback by user id
export const getDiscount = async(id)=>{
    try{
        const result=await axios.get(`${baseURL}/discount/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }    
}