import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//getting count used discount
export const countUsedDiscount = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/used_discount/${id}`);
    return result.data;
}