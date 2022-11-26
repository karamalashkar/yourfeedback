import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get recent discount
export const recentDiscount = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/recent_discount/${id}`);
        return result.data.data.business.name;
    }catch(error){
        console.log(error)
    }    
}