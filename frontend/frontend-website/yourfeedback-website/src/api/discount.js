import axios from "axios";
import { baseURL } from "./base";

//getting all discounts
export const getDiscount = async (id)=>{
    const result = await axios.get(`${baseURL}/discount/${id}`);
    return result.data.data;
}