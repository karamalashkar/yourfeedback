import { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";

const Landing = () =>{
    const navigate=useNavigate();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')

    const loginBusiness = async (e)=>{
        e.preventDefault();
        if(!email || !password){
            setError('Please enter Email and Password')
            return null
        }

        const post={email,password};
        const result=await login(post);
        if(result.response == 'success'){
            localStorage.setItem('id',result.business)
            localStorage.setItem('token',result.result.token)
            navigate("/home")
        }
        else{
            setError('Invalid Credential')
        }
    }
    
    return(
        <>
            <Navbar />
            <div className='flex flex-col align-center xl:flex-row'>
                <div className='xl:w-5/12 flex flex-col items-center'>
                    <h1 className='mb-8 text-5xl font-bold text-center'>Give me your <br/> feedback</h1>
                    <h2 className="my-4 text-lg text-red-700 font-bold">{error}</h2>
                    <form onSubmit={loginBusiness} className="w-full flex flex-col items-center">
                        <Input type='email' text='Email' setValue={setEmail} setError={setError} />
                        <Input type='password' text='Password' setValue={setPassword} setError={setError} />
                        <Button text='Sign In' />
                    </form>    
                    <h4>Don't have an account? <a href='/signup'>Join Now</a></h4>
                </div>
                <div className='my-4 flex justify-center xl:w-7/12'>
                    <img src='feedback.jpg' className='mt-4 rounded-xl' alt='feedback' />
                </div>    
            </div>    
        </>
    )
}

export default Landing;
