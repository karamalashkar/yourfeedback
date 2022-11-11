import axios from "axios";
import { baseURL } from "./base";

//get total number of discount by user id
export const getCountDiscount = async (id)=>{
    const result = await axios.get(`${baseURL}/count_discount/${id}`);
    return result.data.data;
}