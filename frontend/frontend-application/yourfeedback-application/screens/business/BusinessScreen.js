import { Image, Text, View, Alert } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/button/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import { canMakeFeedback } from "../../api/canMakeFeedback";

const BusinessScreen = ({route}) =>{
    const navigation=useNavigation();
    const businessId=route.params.id;
    const [code,setCode]=useState('')
    const [error,setError]=useState('')
    const [isOpen,setIsOpen]=useState(false)

    const checkCode = async() =>{
        if(!code){
            setError('Enter a code')
        }
        else{
            if(code!=route.params.feedback_code){
                setError('Wrong Code')
                return null
            }
            const userId=await AsyncStorage.getItem('id');
            const response=await canMakeFeedback(userId,businessId);
            if(response.status=='success'){
                if(response.data.length!=0){
                    setError('You can make one feedback by month')
                }
                else{
                    navigation.push('Form',{
                        id: business_id,
                        name: route.params.name,
                        category_id: route.params.category_id
                    })
                }
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