import { Image, KeyboardAvoidingView, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { login } from "../../api/login";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { store } from "../../redux/Store";
import { setToken, updateUser } from "../../redux/Slices/userSlice";
import { colors } from "../../constants/colors";

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
            store.dispatch(updateUser({
                user:response.user
            }))
            store.dispatch(setToken({
                token:response.result.token
            }))
        }
    }

    return(
        <KeyboardAvoidingView>
            <View style={styles.component}>
                <View style={styles.body}>
                    <Image source={require('../.././assets/logo.png')} style={styles.image}/>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <View style={styles.form}>
                        <Text style={styles.text}>Login to your Account</Text>
                        <Input placeholder='Email' state={false} setValue={setEmail} setError={setErrorMessage}/>
                        <Input placeholder='Password' state={true} setValue={setPassword} setError={setErrorMessage}/>
                        <Button text='Login' onPress={loginUser}/>
                    </View>
                    <Pressable onPress={()=>navigation.push('Register')}>
                        <Text style={{textAlign: 'center'}}>Don't have an account? <Text style={{color:colors.red}}>Join Now</Text></Text>
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