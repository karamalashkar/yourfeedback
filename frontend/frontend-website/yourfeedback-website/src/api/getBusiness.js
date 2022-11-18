import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const getBusiness = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/${id}`);
    return result.data.data;
}