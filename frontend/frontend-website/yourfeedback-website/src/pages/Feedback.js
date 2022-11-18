import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import { getFeedback } from "../api/feedback";
import { useEffect, useState } from "react";

const Feedback = ()=>{
    const business_id=localStorage.getItem('id');
    const [data,setData]=useState('')
    const [name,setName]=useState('')

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
                    <div className="w-full flex flex-col bg-red mb-8 lg:flex-row">
                        <input type='text' placeholder="Name" className="ml-16 p-4 border-2 border-gray-300 outline-0" 
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        {Object.values(data).filter((value)=>{
                            if(name==''){
                                return value
                            }else if(value[0].user.name==name){
                                return value
                            }
                        }).map((answer)=>{
                            return(
                                <Card name={answer[0].user.name} 
                                date={answer[0].created_at.substring(0,10)} 
                                data={answer} />
                            );
                        })}
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Feedback;

