import axios from "axios";
import { baseURL } from "./base";

//get the number of feedback by user
export const countFeedback = async(id)=>{
    try{
        const result=await axios.get(`${baseURL}/count_feedback/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
}