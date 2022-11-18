import axios from "axios";
import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";
const date=new Date();

//adding feedback survey
export const addFeedback = async(userId,businessId,data)=>{
    try{
        {Object.values(data).map(async(data)=>{
                const result=await axiosInstance(getToken()).post(`/feedback`,{
                    user_id:userId,
                    business_id:businessId,
                    survey_id:`${userId}${businessId}${date.getDate()}${date.getMonth()}`,
                    question_id:data.question_id,
                    answer:data.response
                })
            })
        }
        
    }catch(error){
        console.log(error)
    }    
}