import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get feedback by user id
export const getDiscount = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/discount/${id}`);
        return result.data;
    }catch(error){
        console.log(error)
    }    
}