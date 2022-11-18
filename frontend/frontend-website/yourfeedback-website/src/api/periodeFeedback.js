import axios from "axios";
import { baseURL } from "./base";

export const feedbackPeriode = async(id)=>{
    const resultWeek =await axios.get(`${baseURL}/feedback_week/${id}`);
    const weekCount=resultWeek.data.data;
}