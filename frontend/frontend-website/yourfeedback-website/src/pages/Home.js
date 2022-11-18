import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Box from "../components/Box";
import Chart from "../components/Chart";
import { useState,useEffect } from "react";
import { getCountFeedback } from "../api/countFeedback";
import { getCountDiscount } from "../api/countDiscount";
import { feedbackPeriode } from "../api/periodeFeedback";
import { discountPeriode } from "../api/periodeDiscount";

const Home = ()=>{
    const business_id=localStorage.getItem('id');
    const [countF,setCountFeedback]=useState('')
    const [countD,setCountDiscount]=useState('')
    const [feedback,setFeedback]=useState('')
    const [discount,setDiscount]=useState('')
    useEffect(()=>{
        const countFeedback = async ()=>{
            const result=await getCountFeedback(business_id);
            setCountFeedback(result)
        }

        const countDiscount = async ()=>{
            const result=await getCountDiscount(business_id);
            setCountDiscount(result)
        }

        const feedback = async ()=>{
            const result=await feedbackPeriode(business_id);
            setFeedback(result)
        }

        const discount = async ()=>{
            const result=await discountPeriode(business_id);
            setDiscount(result)
        }

        countFeedback();
        countDiscount();
        feedback();
        discount();
    },[])
    
    return(
        <>
            <div className="flex h-auto lg:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>    
                <div className="w-4/5">
                    <Topbar text={'Home'} />
                    <div className="flex flex-col items-center lg:flex-row justify-evenly">
                        <Box text='Feedback' value={countF} />
                        <Box text='Discount' value={countD} />
                        <Box />
                    </div>
                    <div className="flex flex-col items-center my-12 h-auto w-2/4 lg:flex-row">
                        <Chart text='Feedback' data={feedback} />   
                        <Chart text='Discount' data={discount} />
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Home;