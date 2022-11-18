import axios from "axios";
import { baseURL } from "./base";

export const discountPeriode = async(id)=>{
    const resultWeek =await axios.get(`${baseURL}/discount_week/${id}`);
    const weekCount=resultWeek.data.data;
    const resultMonth = await axios.get(`${baseURL}/discount_month/${id}`);
    const monthCount=resultMonth.data.data;
}