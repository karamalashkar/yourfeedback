import { Image, ScrollView } from "react-native";
import { styles } from "./style";
import { FeedbackBox } from "../../components/box/Box";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFeedback } from "../../api/getFeedback";

const FeedbackScreen = () =>{
    const [data,setData]=useState('')
    const [feedback,setFeedback]=useState('')
    useEffect(()=>{
        const feedback=async () =>{
            const userId=await AsyncStorage.getItem('id');
            const response=await getFeedback(userId);
            if(response.status=='failde'){
                setData(false)
                return null
            }
            setData(true)
            setFeedback(response.data)
        }

        feedback();
    },[])

    if (!data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView>
            {Object.values(feedback).map((feedback)=>{
                return(
                    <FeedbackBox name={feedback[0].business.name} date={feedback[0].created_at.substring(0,10)} />
                )
            })}
        </ScrollView>
    )
}

export default FeedbackScreen;