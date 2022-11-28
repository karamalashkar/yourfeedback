import { useState } from "react";
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
        <div className="w-full h-full fixed bg-white flex items-center justify-center">
            <div className='w-full h-full fixed bg-white flex flex-col-reverse align-center items-center xl:h-4/5 xl:w-4/5 xl:flex-row drop-shadow-2xl rounded-lg'>
                <div className="w-full flex flex-col items-center justify-center xl:w-2/4">
                    <h1 className="mb-8 font-bold text-3xl mt-4 xl:mt-0">Login</h1>
                    <h2 className="text-md text-red-700">{error}</h2>
                    <form onSubmit={loginBusiness} className="w-full flex flex-col items-center">
                        <Input type='email' text='Email' setValue={setEmail} setError={setError} />
                        <Input type='password' text='Password' setValue={setPassword} setError={setError} />
                        <Button text='Sign In' />
                    </form>    
                    <h4 className="my-2 text-sm font-semibold mb-4 xl:mb-0">Don't have an account? <a href='/signup' className="text-red-700">Join Now</a></h4>
                </div>
                <div className="w-full h-full bg-red-700 flex flex-col items-center rounded-lg xl:w-2/4 rounded-tr-lg rounded-br-lg">
                    <img src='darkLogo.png' className='h-1/4 w-2/5 mt-8 xl:mt-20' alt='feedback' />
                    <h1 className="text-white text-opacity-80 w-3/4 mt-8">
                        Your feedback website is for business owner to start receiving feedback from their 
                        customer's according to a feedback code.
                    </h1>
                </div>
            </div>
        </div>        
    )
}

export default Landing;
