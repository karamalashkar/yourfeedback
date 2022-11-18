import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//getting businesses according to user location
export const getBusiness = async(latitude,longitude) =>{
    try{
        const result=await axiosInstance(getToken()).get(`/near_business/${latitude}/${longitude}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
    
}