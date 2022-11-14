import axios from "axios";
import { baseURL } from "./base";

//get the number of discount by user
export const countDiscount = async(id)=>{
    try{
        const result=await axios.get(`${baseURL}/count_discount/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }    
}