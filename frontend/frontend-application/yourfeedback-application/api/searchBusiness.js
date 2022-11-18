import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const searchBusinessByName = async(data)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/search_business/${data}`);
        return result.data;
    }catch(error){
        console.log(error)
    }    
}