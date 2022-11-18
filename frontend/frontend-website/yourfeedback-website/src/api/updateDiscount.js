import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get discount by discount code 
export const updateDiscount = async (code)=>{
    await axiosInstance(getToken()).get(`/update_discount/${code}`);
}