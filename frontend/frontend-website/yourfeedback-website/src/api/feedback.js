import axios from "axios";
import { baseURL } from "./base";

//getting feedback forms
export const getFeedback = async (id)=>{
    const result = await axios.get(`${baseURL}/feedback/${id}`);
    return result.data.data;
}
