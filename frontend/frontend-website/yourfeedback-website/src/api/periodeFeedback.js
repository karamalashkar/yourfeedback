import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const feedbackPeriode = async(id)=>{
    const resultWeek =await axiosInstance(getToken()).get(`/feedback_week/${id}`);
    const weekCount=resultWeek.data.data;
    const resultMonth = await axiosInstance(getToken()).get(`/feedback_month/${id}`);
    const monthCount=resultMonth.data.data;
    const resultYear = await axiosInstance(getToken()).get(`/feedback_year/${id}`);
    const yearCount=resultYear.data.data;

    return [
        {name:'Week',Feedback:weekCount},
        {name:'Month',Feedback:monthCount},
        {name:'Year',Feedback:yearCount}
    ]
}