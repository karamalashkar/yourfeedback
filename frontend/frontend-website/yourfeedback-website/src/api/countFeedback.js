import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get total number of feedback by user id
export const getCountFeedback = async (id)=>{
    const result = await axiosInstance(getToken()).get(`/count_feedback/${id}`);
    return result.data.data;
}