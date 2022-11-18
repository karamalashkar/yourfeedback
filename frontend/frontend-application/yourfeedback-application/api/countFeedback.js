import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get the number of feedback by user
export const countFeedback = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/count_feedback/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
}