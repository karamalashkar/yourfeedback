import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";

const Editprofile = ({open,onClose}) =>{
    const[name,setName]=useState('')
    const[bio,setBio]=useState('')
    const[image,setImage]=useState('')

    const edit = ()=>{}

     if(!open){
        return null
    }

    return(
        <>
        <div className="h-auto rounded-xl shadow-2xl bg-white absolute mx-4 w-3/4 md:mx-24 md:w-2/4 xl:mx-52 xl:w-1/2">
            <button className="mx-8 my-4 text-3xl text-red-700" onClick={onClose}><AiFillCloseCircle/></button>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
                <form onSubmit={edit} className="flex flex-col items-center w-full">
                    
                    <input type="text" placeholder="Name" 
                    onChange={(event)=>{setName(event.target.value)}}
                    value={name}
                    className="w-1/2 p-3 mt-4 border-2 border-grey-100 rounded-xl"/>
                    
                    <textarea placeholder="Bio" maxLength={200}
                    onChange={(event)=>{setBio(event.target.value)}}
                    value={bio}
                    className="w-1/2 p-3 mt-4 mb-4 h-44 border-2 border-grey-100 rounded-xl"></textarea>
                    
                    <input type="file" accept="image/png, image/jpg" 
                    onChange={(event)=>{setImage(event.target.value)}}
                    value={image}
                    className="w-1/2 p-3 border-2 border-grey-100 rounded-xl" />

                    <Button text={'Save'} />
                    <br/>
                </form>
            </div>
        </div>
        </>
    )
}

export default Editprofile;