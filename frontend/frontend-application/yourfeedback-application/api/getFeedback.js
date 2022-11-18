import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get feedback made by user
export const getFeedback = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/feedback/${id}`);
        return result.data;
    }catch(error){
        console.log(error);
    }
    
}