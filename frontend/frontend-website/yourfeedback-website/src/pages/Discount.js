import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Discountbox from "../components/Discountbox";
import { getDiscount } from "../api/discount";
import { useEffect, useState } from "react";

const Discount = ()=>{
    const business_id=localStorage.getItem('id');
    const [data,setData]=useState('')

    useEffect(()=>{
        const discount = async ()=>{
            const result=await getDiscount(business_id);
            setData(result)
        }
        discount()
    },[])

    if(!data){
        return(
            <div className="flex h-full bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Discount'} />
                    <img src='data.png' className="w-full"/>
                </div>
            </div>
        )    
    }

    return(
        <>
            <div className="flex h-auto sm:h-auto md:h-auto lg:h-screen xl:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Discount'} />
                    <div className="flex flex-wrap justify-evenly">
                        {Object.values(data).map((data)=>{
                            return(
                                <Discountbox name={data.user.name} value={data.value} code={data.code} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount;