import axiosInstance from "./base";

//add a new business
export const signup = async (data)=>{
    const result = await axiosInstance.post('',data);
    return result.data.status;
}