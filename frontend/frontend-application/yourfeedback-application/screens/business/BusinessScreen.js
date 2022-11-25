import { Image, Text, View, Alert } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/button/Button";
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import { canMakeFeedback } from "../../api/canMakeFeedback";
import { store } from "../../redux/Store";

const BusinessScreen = ({route}) =>{
    const navigation=useNavigation();
    let userId=store.getState().user.id
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
            const response=await canMakeFeedback(userId,businessId);
            console.log(businessId)
            if(response.status=='success'){
                if(response.data.length!=0){
                    setError('You can make one feedback by month')
                    return null
                }
                else{
                    navigation.push('Feedback-Form',{
                        id: businessId,
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
        <>
            <Image source={route.params.image?{uri: route.params.image}:require('../../assets/market.jpg')} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.body}>{route.params.bio}</Text>
            </View>
            <View style={styles.component}>
                <View style={styles.button}>
                    <Button text='Feedback' onPress={()=>setIsOpen(true)} />
                </View>
            </View>
            <Popup open={isOpen} continue={checkCode} back={goBack} error={error} setValue={setCode} />
        </>
    )
}

export default BusinessScreen;