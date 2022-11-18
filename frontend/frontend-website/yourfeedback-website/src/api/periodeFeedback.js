import axios from "axios";
import { baseURL } from "./base";

export const feedbackPeriode = async(id)=>{
    const resultWeek =await axios.get(`${baseURL}/feedback_week/${id}`);
    const weekCount=resultWeek.data.data;
    const resultMonth = await axios.get(`${baseURL}/feedback_month/${id}`);
    const monthCount=resultMonth.data.data;
    const resultYear = await axios.get(`${baseURL}/feedback_year/${id}`);
    const yearCount=resultYear.data.data;

    return [
        {name:'Week',Feedback:weekCount},
        {name:'Month',Feedback:monthCount},
        {name:'Year',Feedback:yearCount}
    ]
}