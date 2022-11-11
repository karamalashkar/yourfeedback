import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import { getFeedback } from "../api/feedback";
import { useEffect, useState } from "react";

const Feedback = ()=>{
    const business_id=localStorage.getItem('id');
    const [data,setData]=useState('')

    useEffect(()=>{
        const feedback = async ()=>{
            const result=await getFeedback(business_id);
            setData(result)
        }
        feedback()
    },[])

    if(!data){
        return(
            <div className="flex h-full bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Feedback'} />
                    <img src='data.png' className="w-full"/>
                </div>
            </div>
        )
    }
    return(
        <>
            <div className="flex h-full bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Feedback'} />
                    <div className="flex flex-wrap justify-evenly">
                        {Object.values(data).map((answer)=>{
                            console.log(answer)
                            return(
                                <Card name={answer[0].user.name} 
                                date={answer[0].created_at.substring(0,10)} 
                                data={answer} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback;

