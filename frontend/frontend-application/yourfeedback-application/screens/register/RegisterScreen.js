import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";
import { emailValidation, passwordValidation } from "../../utilities/Validator"; 

const RegisterScreen = () =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const [errorEmail,setErrorEmail]=useState('')
    const [errorPassword,setErrorPassword]=useState('')

    const register = () =>{
        if(!name || !email || !password){
            setErrorMessage('Enter all required fields')
            return null
        }

        //validate email and password
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
        <View style={styles.component}>
            <Image source={require('../.././assets/logo.png')} style={styles.image}/>
            <Text style={styles.text}>Sign Up</Text>
            <Text style={styles.error}>{errorMessage}</Text>
            <Input placeholder='Name' state={false} setValue={setName} setError={setErrorMessage}/>
            
            <Input placeholder='Email' 
            state={false} errorMessage={errorEmail} 
            setValue={setEmail} 
            setError={setErrorMessage}/>

            <Input placeholder='Password' 
            state={true} setValue={setPassword} 
            errorMessage={errorPassword} 
            setError={setErrorMessage}/>
            
            <Button text='Signup' onPress={register} />
        </View>        
    )
}

export default RegisterScreen;