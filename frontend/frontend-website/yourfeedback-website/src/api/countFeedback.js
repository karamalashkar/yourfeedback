import axios from "axios";
import { baseURL } from "./base";

//get total number of feedback by user id
export const getCountFeedback = async (id)=>{
    const result = await axios.get(`${baseURL}/count_feedback/${id}`);
    return result.data.data;
}