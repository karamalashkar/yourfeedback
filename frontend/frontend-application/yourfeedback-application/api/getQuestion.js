import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

//get questions by category
export const getQuestion = async(category_id)=>{
    try{
        const result=await axiosInstance(getToken()).get(`/question_category/${category_id}`);
        return result.data.data[0].question;
    }catch(error){
        console.log(error)
    }    
}