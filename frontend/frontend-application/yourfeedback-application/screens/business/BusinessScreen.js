import { Image, Text, View, Alert } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/button/Button";
import { useState } from "react";
import Popup from "../../components/popup/Popup";

const BusinessScreen = ({route}) =>{
    const navigation=useNavigation();
    const [code,setCode]=useState('')
    const [error,setError]=useState('')
    const [isOpen,setIsOpen]=useState(false)

    const checkCode = () =>{
        if(!code){
            setError('Enter a code')
        }
        else{
            if(code!=route.params.feedback_code){
                setError('Wrong Code')
            }
        }
    }

    const goBack = () =>{
        setCode('')
        setError('')
        setIsOpen(false)
    }

    return(
        <View>
            <Image source={route.params.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.body}>{route.params.bio}</Text>
                <Button text='Feedback' onPress={()=>setIsOpen(true)} />
            </View>
            <Popup open={isOpen} continue={checkCode} back={goBack} error={error} setValue={setCode} />
        </View>
    )
}

export default BusinessScreen;