import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//edit business profile
export const editBusiness = async(data)=>{
    const result=await axiosInstance(getToken()).post(`/edit`,data);
    return result.data;
}