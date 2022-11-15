import axios from "axios";
import { baseURL } from "./base";

//getting businesses according to user location
export const getBusiness = async(latitude,longitude) =>{
    try{
        const result=await axios.get(`${baseURL}/near_business/${latitude}/${longitude}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
    
}