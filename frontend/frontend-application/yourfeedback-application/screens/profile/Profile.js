import { RefreshControl, ScrollView, Text, View } from "react-native";
import { ProfileBox } from "../../components/box/Box";
import { styles } from "./style";
import Button from "../../components/button/Button";
import { getUser } from "../../api/getUser";
import { countFeedback } from "../../api/countFeedback";
import { countDiscount } from "../../api/countDiscount";
import { useEffect, useState } from "react";
import { store } from "../../redux/Store";
import {deleteUser} from "../../redux/Slices/userSlice";

const ProfileScreen = () =>{
    const [name,setName]=useState('')
    const [feedback,setFeedback]=useState('')
    const [discount,setDiscount]=useState('')
    const [load,setLoad]=useState(true)

    let userId=store.getState().user.id
    const user = async () =>{
        const response=await getUser(userId);
        if(response.status=='success'){
            setName(response.data.name)
        }
    }
    const userInfo=async () =>{
        const responseFeedback=await countFeedback(userId);
        const responseDiscount=await countDiscount(userId);
            setFeedback(responseFeedback.data)
            setDiscount(responseDiscount.data)
            setLoad(false)
    }
    
    useEffect(()=>{
        user();
        userInfo()    
    },[])
    
    const logout = ()=>{
        store.dispatch(deleteUser())
    }

    return(
        <View style={styles.profile}>
            <Text style={styles.user}>{name}</Text>
            <ScrollView style={styles.box} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userInfo}/>}>
                <ProfileBox name='Feedback' value={feedback} />
                <ProfileBox name='Discount' value={discount} />
            </ScrollView>
            <Button text='Logout' onPress={logout}/>
        </View>
    )
}

export default ProfileScreen;