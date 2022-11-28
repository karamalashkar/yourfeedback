import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { emailValidation , passwordValidation } from "../utilities/Validator";
import { signup } from "../api/signup";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    const navigate=useNavigate();
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[category,setCategory]=useState('')
    const[latitude,setLatitude]=useState('')
    const[longitude,setLongitude]=useState('')
    const[error,setError]=useState('')
    const[errorEmail,setErrorEmail]=useState('')
    const[errorPassword,setErrorPassword]=useState('')
    const feedback_code=Math.floor(Math.random() * (100000000-1000));

    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    })

    const signupBusiness = async (e)=>{
        e.preventDefault();
        if(!name || !email || !password || !category){
            setError('Please enter all required fields')
            return null
        }

        const matchEmail=emailValidation(email);
        const matchPassword=passwordValidation(password);

        if(matchEmail && matchPassword){
            setErrorEmail('')
            setErrorPassword('')
            const post={name,email,password,'category_id':category,latitude,longitude,feedback_code};
            const result=await signup(post);
            if(result == 'success'){
                navigate("/")
            }
            else{
                setError('Email already exist')
            }
        }
        else{
            if(!matchEmail && !matchPassword){
                setErrorEmail('Invalid Email')
                setErrorPassword('8 characters, upper, lower, number, character')
            }
            else if(!matchEmail){
                setErrorEmail('Invalid Email')
                setErrorPassword('')
            }
            else if(!matchPassword){
                setErrorEmail('')
                setErrorPassword('8 characters, upper, lower, number, character')
            }
        }        
    }

    return(
        <div className="w-full h-full fixed bg-gray-100 flex items-center justify-center">
            <div className='w-full h-full fixed bg-white flex flex-col-reverse align-center rounded-lg items-center xl:h-4/5 xl:w-4/5 xl:flex-row drop-shadow-2xl'>
                <div className="w-full flex flex-col items-center justify-center xl:w-2/4">
                    <h1 className="mb-8 font-bold text-3xl mt-4 xl:mt-0">Sign Up</h1>
                    <h2 className="text-md text-red-700">{error}</h2>
                    <form onSubmit={signupBusiness} className="w-full flex flex-col items-center mb-4 xl:mb-0">
                        <Input type='text' text='Name' setValue={setName} setError={setError} />
                        <Input type='email' text='Email' setValue={setEmail} setError={setError} />
                        <h4 className="text-red-700 font-bold">{errorEmail}</h4>
                        <Input type='password' text='Password' setValue={setPassword} setError={setError} />
                        <h4 className="text-xs text-red-700 font-bold">{errorPassword}</h4>
                        <Select setValue={setCategory} setError={setError} />
                        <Button text='Sign Up' />
                    </form>    
                </div>
                <div className="w-full h-full bg-red-700 flex flex-col items-center rounded-lg xl:w-2/4 rounded-tr-lg rounded-br-lg">
                    <img src='darkLogo.png' className='h-1/4 w-2/5 mt-4 xl:mt-20' alt='feedback' />
                    <h1 className="text-white text-opacity-80 w-3/4 mt-8">
                        Your feedback website is for business owner to start receiving feedback from their 
                        customer's according to a feedback code. 
                    </h1>
                </div>            
            </div>
        </div>     
    )
}

export default Signup;