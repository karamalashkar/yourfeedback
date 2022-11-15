import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Editprofile from "../components/Editprofile";
import { getBusiness } from "../api/getBusiness";

const Profile = ()=>{
    const business_id=localStorage.getItem('id');
    const [image,setImage]=useState('')
    const [name,setName]=useState('')
    const [bio,setBio]=useState('')
    const [feedbackCode,setFeedbackCode]=useState('')
    const [isOpen,setOpen]=useState(false)
    useEffect(()=>{
        const business= async ()=>{
            const result=await getBusiness(business_id);
            setImage(result.image)
            setName(result.name)
            setBio(result.bio)
            setFeedbackCode(result.feedback_code)
        }

        business();
    },[])
    return(
        <>
            <div className="flex h-auto lg:h-screen bg-gray-100">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Topbar text={'Profile'} />
                    <Editprofile open={isOpen} onClose={()=>setOpen(false)} />
                    <div className="flex flex-col items-center lg:flex-row my-12">
                        <div className="flex justify-center w-full xl:w-2/4">
                            <img src={image} alt='profile picture' className="w-3/4 h-96 rounded-xl shadow-2xl" />
                        </div>
                        <div className="flex-col items-start w-3/4 mt-4 xl:w-2/4">
                            <h1 className="text-4xl font-bold">{name}</h1>
                            <p className="mt-8 max-w-md h-auto text-lg">{bio}</p>
                            <h2 className='my-8 text-lg'>Feedback Code: <span className="font-bold">{feedbackCode}</span></h2>
                            <button onClick={()=>setOpen(true)} className='w-1/2 p-3 mt-4 bg-red-700 text-white rounded-xl'>Edit Profile</button>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;