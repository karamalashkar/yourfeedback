import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//getting all discounts
export const getDiscount = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/discount/${id}`);
    return result.data.data;
}