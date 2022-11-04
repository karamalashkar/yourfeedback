import { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { emailValidation , passwordValidation } from "../utilities/Validator";

const Signup = ()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[category,setCategory]=useState('')
    const[latitude,setLatitude]=useState('')
    const[longitude,setLongitude]=useState('')
    const[error,setError]=useState('')
    const[errorEmail,setErrorEmail]=useState('')
    const[errorPassword,setErrorPassword]=useState('')

    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    })

    const signup = (e)=>{
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
        <>
            <Navbar />
            <div className='flex flex-col align-center xl:flex-row'>
                <div className='xl:w-5/12 flex flex-col items-center'>
                    <h1 className='mb-4 text-5xl font-bold'>Sign Up</h1>
                    <h2 className="my-4 text-lg text-red-700 font-bold">{error}</h2>
                    <form onSubmit={signup} className="w-full flex flex-col items-center">
                        <Input type='text' text='Name' setValue={setName} setError={setError} />
                        <Input type='email' text='Email' setValue={setEmail} setError={setError} />
                        <h4 className="text-red-700 font-bold">{errorEmail}</h4>
                        <Input type='password' text='Password' setValue={setPassword} setError={setError} />
                        <h4 className="text-xs text-red-700 font-bold">{errorPassword}</h4>
                        <Select setValue={setCategory} setError={setError} />
                        <Button text='Sign Up' />
                    </form>    
                </div>
                <div className='my-4 flex justify-center xl:w-7/12'>
                    <img src='feedback.jpg' className='mt-4 rounded-xl' alt='feedback' />
                </div>    
            </div>
        </>
    )
}

export default Signup;