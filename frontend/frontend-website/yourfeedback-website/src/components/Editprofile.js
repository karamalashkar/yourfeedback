import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";
import { getBusiness } from "../api/getBusiness";
import { editBusiness } from "../api/editProfile";

const Editprofile = ({open,onClose}) =>{
    const business_id=localStorage.getItem('id');
    const[name,setName]=useState('')
    const[bio,setBio]=useState('')
    const[location,setLocation]=useState('')
    const[image,setImage]=useState('')
    
    const edit = async (e)=>{
        e.preventDefault();
        const post={business_id,name,bio,location,image}
        if(!image){
            post.image=''
        }
        const result=await editBusiness(post)
        window.location.reload() 
    }

    useEffect(()=>{
        const business= async ()=>{
            const result=await getBusiness(business_id);
            setName(result.name)
            setBio(result.bio)
            setLocation(result.location)
        }

        business();
    },[])

    const uploadImage = async(e)=>{
        const file=e.target.files[0]
        const base64=await convertBase64(file);
        setImage(base64)
    }

    //convert image to base64
    const convertBase64= (file)=>{
        return new Promise((resolve,reject)=>{
            const filReader=new FileReader();
            filReader.readAsDataURL(file);

            filReader.onload=()=>{
                resolve(filReader.result);
            }
            filReader.onerror=(error)=>{
                reject(error);
            }
        })
    }

     if(!open){
        return null
    }

    return(
        <>
        <div className="h-auto rounded-xl shadow-2xl bg-white absolute mx-4 w-3/5 md:mx-24 md:w-2/4 xl:mx-52 xl:w-1/2">
            <div className="flex justify-end">
                <button className="right-1 mx-8 my-2 text-3xl text-red-700" onClick={onClose}><AiFillCloseCircle/></button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
                <form onSubmit={edit} className="flex flex-col items-center w-full">
                    
                    <input type="text" placeholder="Name" 
                    onChange={(event)=>{setName(event.target.value)}}
                    defaultValue={name}
                    className="w-3/5 p-3 border-2 border-grey-100 rounded-xl"/>
                    
                    <textarea placeholder="Bio" maxLength={200}
                    onChange={(event)=>{setBio(event.target.value)}}
                    defaultValue={bio}
                    className="w-3/5 p-3 mt-2 h-32 border-2 border-grey-100 rounded-xl"></textarea>
                    
                    <input type="text" placeholder="Location" 
                    onChange={(event)=>{setLocation(event.target.value)}}
                    defaultValue={location}
                    className="w-3/5 p-3 mt-2 border-2 border-grey-100 rounded-xl"/>

                    <input type="file" accept="image/png, image/jpg" 
                    onChange={(e)=>{uploadImage(e)}}
                    className="w-3/5 p-3 mt-2 border-2 border-grey-100 rounded-xl" />

                    <Button text={'Save'} />
                    <br/>
                </form>
            </div>
        </div>
        </>
    )
}

export default Editprofile;