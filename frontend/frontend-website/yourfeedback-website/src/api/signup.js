import axios from "axios";
import { baseURL } from "./base";

//add a new business
export const signup = async (data)=>{
    const result = await axios.post(baseURL,data);
    return result.data.status;
}