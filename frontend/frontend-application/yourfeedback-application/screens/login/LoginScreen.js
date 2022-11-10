import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";

const LoginScreen = () =>{
    const navigation=useNavigation();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const login = () =>{
        if(!email || !password){
            setErrorMessage('Enter all required fields')
        }
        else{
            setErrorMessage('')
        }
    }

    return(
        <View style={styles.component}>
            <Image source={require('../.././assets/logo.png')} style={styles.image}/>
            <Text style={styles.text}>Give me your Feedback</Text>
            <Text style={styles.error}>{errorMessage}</Text>
            <Input placeholder='Email' state={false} setValue={setEmail} setError={setErrorMessage}/>
            <Input placeholder='Password' state={true} setValue={setPassword} setError={setErrorMessage}/>
            <Button text='Login' onPress={login}/>
            <Pressable onPress={()=>navigation.push('Register')}>
                <Text>Don't have an account? Join Now</Text>
            </Pressable>
        </View>    
    )
}

export default LoginScreen;