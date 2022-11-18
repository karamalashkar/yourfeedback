import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//getting feedback forms
export const getFeedback = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/feedback/${id}`);
    return result.data.data;
}
