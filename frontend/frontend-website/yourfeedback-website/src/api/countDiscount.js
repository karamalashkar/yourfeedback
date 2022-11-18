import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get total number of discount by user id
export const getCountDiscount = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/count_discount/${id}`);
    return result.data.data;
}