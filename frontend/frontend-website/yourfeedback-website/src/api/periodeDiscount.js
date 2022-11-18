import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const discountPeriode = async(id)=>{
    const resultWeek =await axiosInstance(getToken()).get(`/discount_week/${id}`);
    const weekCount=resultWeek.data.data;
    const resultMonth = await axiosInstance(getToken()).get(`/discount_month/${id}`);
    const monthCount=resultMonth.data.data;
    const resultYear = await axiosInstance(getToken()).get(`/discount_year/${id}`);
    const yearCount=resultYear.data.data;

    return [
        {name:'Week',Discount:weekCount},
        {name:'Month',Discount:monthCount},
        {name:'Year',Discount:yearCount}
    ]
}