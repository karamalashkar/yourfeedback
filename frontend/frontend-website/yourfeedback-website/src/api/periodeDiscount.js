import axios from "axios";
import { baseURL } from "./base";

export const discountPeriode = async(id)=>{
    const resultWeek =await axios.get(`${baseURL}/discount_week/${id}`);
    const weekCount=resultWeek.data.data;
}