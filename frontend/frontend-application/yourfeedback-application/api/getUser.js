import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get user by id
export const getUser = async(id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/${id}`);
        return result.data;
    }catch(error){
        console.log(error);
    }
   
}