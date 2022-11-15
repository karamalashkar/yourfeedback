import axios from "axios";
import { baseURL } from "./base";

//get questions by category
export const getQuestion = async(category_id)=>{
    try{
        const result=await axios.get(`${baseURL}/question_category/${category_id}`);
        return result.data.data[0].question;
    }catch(error){
        console.log(error)
    }    
}