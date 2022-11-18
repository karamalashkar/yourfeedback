import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";
const date=new Date();

//adding discount
export const addDiscount = async(userId,businessId,value)=>{
    try{
        const result=await axiosInstance(getToken()).post(`/discount`,{
            user_id:userId,
            business_id:businessId,
            value: value,
            code: `${userId}${businessId}${date.getDate()}${date.getMonth()}`,
            used: '0'
        })
    }catch(error){
        console.log(error)
    }    
}