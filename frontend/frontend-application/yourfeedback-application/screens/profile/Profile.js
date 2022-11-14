import { Text, View } from "react-native";
import { ProfileBox } from "../../components/box/Box";
import { styles } from "./style";
import Button from "../../components/button/Button";
import { getUser } from "../../api/getUser";
import { countFeedback } from "../../api/countFeedback";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

const ProfileScreen = () =>{
    const [name,setName]=useState('')
    const [feedback,setFeedback]=useState('')
    useEffect(()=>{
        const user = async () =>{
            const business_id=await AsyncStorage.getItem('id');
            const response=await getUser(business_id);
            if(response.status=='success'){
                setName(response.data.name)
            }
        }
        const getCountFeedback=async () =>{
            const business_id=await AsyncStorage.getItem('id');
            const response=await countFeedback(business_id);
            if(response.status=='success'){
                setFeedback(response.data)
            }
        }

        user();
        getCountFeedback();
    },[])
    
    return(
        <View style={styles.profile}>
            <Text style={styles.user}>{name}</Text>
            <View style={styles.box}>
                <ProfileBox name='Feedback' value={feedback} />
                <ProfileBox name='Discount' value='7' />
            </View>
            <Button text='Edit Profile'/>
            <Button text='Logout'/>
        </View>
    )
}

export default ProfileScreen;