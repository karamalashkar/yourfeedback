import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Editprofile from "../components/Editprofile";
import { getBusiness } from "../api/getBusiness";

const Profile = ()=>{
    const business_id=localStorage.getItem('id');
    const [image,setImage]=useState('market.jpg')
    const [name,setName]=useState('')
    const [bio,setBio]=useState('')
    const [location,setLocation]=useState('')
    const [feedbackCode,setFeedbackCode]=useState('')
    const [isOpen,setOpen]=useState(false)
    useEffect(()=>{
        const business= async ()=>{
            const result=await getBusiness(business_id);
            setName(result.name)
            setBio(result.bio)
            setLocation(result.location)
            setFeedbackCode(result.feedback_code)
            if(result.image){
                setImage(result.image)
            }
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
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="h-auto w-4/5 flex flex-col rounded-tr-xl rounded-br-xl lg:flex-row my-12 items-center bg-white">
                            <img src={image} alt='profile picture' className="w-2/4 h-96 rounded-tl-xl rounded-bl-xl shadow-2xl" />
                            <div className="ml-8 flex-col items-start xl:w-2/4 bg-white">
                                <h1 className="text-3xl font-bold">{name}</h1>
                                <p className="mt-8 max-w-md h-auto text-lg">{bio}</p>
                                <h2 className='my-4 text-lg'>Location: <span className="font-bold">{location}</span></h2>
                                <h2 className='my-4 text-lg'>Feedback Code: <span className="font-bold">{feedbackCode}</span></h2>
                                <button onClick={()=>setOpen(true)} className='w-1/2 p-3 mt-4 bg-red-700 text-white font-bold rounded-xl'>Edit Profile</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;