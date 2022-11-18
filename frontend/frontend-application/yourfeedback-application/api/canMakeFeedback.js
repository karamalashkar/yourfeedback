import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const canMakeFeedback = async(user_id,business_id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/make_feedback/${user_id}/${business_id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
}