import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get recent feedback
export const recentFeedback = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/recent_feedback/${id}`);
        return result.data.data.business.name;
    }catch(error){
        console.log(error)
    }    
}