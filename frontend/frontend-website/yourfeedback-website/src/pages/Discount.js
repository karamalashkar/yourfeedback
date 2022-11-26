import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Discountbox from "../components/Discountbox";
import { getDiscount } from "../api/discount";
import { useEffect, useState } from "react";
import { updateDiscount } from "../api/updateDiscount";

const Discount = ()=>{
    const business_id=localStorage.getItem('id');
    const [data,setData]=useState('')
    const [discountCode,setDiscountCode]=useState('')
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
                    <img src='data.png' className="w-full"/>
                </div>
            </div>
        )    
    }

    const update = async()=>{
        await updateDiscount(discountCode)
        window.location.reload()
    }

    return(
        <>
            <div className="flex h-auto sm:h-auto md:h-auto lg:h-screen xl:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Discount'} />
                    <div className="w-full flex bg-red mb-8 lg:flex-row">
                        <input type='text' placeholder="Discount Code" className="ml-16 p-3 w-44 shadow-xl rounded-tl-xl rounded-bl-xl outline-0" 
                        onChange={e => setDiscountCode(e.target.value)}/>
                        <button className="w-20 p-4 bg-red-700 text-white font-semibold rounded-tr-xl rounded-br-xl" onClick={update}>Used</button>
                    </div>

                    <div className="flex flex-wrap justify-evenly">
                        {Object.values(data).filter((value)=>{
                            if(discountCode==''){
                                return value
                            }else if(value.code==discountCode){
                                return value
                            }
                        }).map((value)=>{
                            return(
                                <Discountbox key={value.id} name={value.user.name} value={value.value} code={value.code} 
                                use={value.used==0?'Not used':'Used'} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount;