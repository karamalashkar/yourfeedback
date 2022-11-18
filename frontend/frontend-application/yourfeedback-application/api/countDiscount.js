import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get the number of discount by user
export const countDiscount = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/count_discount/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }    
}