import { Image, KeyboardAvoidingView, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";
import { login } from "../../api/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () =>{
    const navigation=useNavigation();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const loginUser = async() =>{
        if(!email || !password){
            setErrorMessage('Enter all required fields')
        }
        else{
            const post={email,password};
            const response=await login(post);
            if(response.response=='error'){
                setErrorMessage('Invalid Credentials');
                return null                        
            }
            AsyncStorage.setItem('id',response.user.id.toString())
            AsyncStorage.setItem('token',response.result.token)
        }
    }

    return(
        <KeyboardAvoidingView behavior="height">
        <View style={styles.component}>
            <View style={styles.body}>
                <Image source={require('../.././assets/logo.png')} style={styles.image}/>
                <Text style={styles.text}>Give me your Feedback</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Input placeholder='Email' state={false} setValue={setEmail} setError={setErrorMessage}/>
                <Input placeholder='Password' state={true} setValue={setPassword} setError={setErrorMessage}/>
                <Button text='Login' onPress={loginUser}/>
                <Pressable onPress={()=>navigation.push('Register')}>
                    <Text>Don't have an account? Join Now</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Discount on your helpful feedback</Text>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;