import axios from "axios";
import { baseURL } from "./base";
const date=new Date();

//adding feedback survey
export const addFeedback = async(userId,businessId,data)=>{
    try{
        {Object.values(data).map(async(data)=>{
                const result=await axios.post(`${baseURL}/feedback`,{
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