import { RefreshControl, ScrollView, Text, View } from "react-native";
import ProfileBox from "../../components/box/Box";
import { styles } from "./style";
import Button from "../../components/button/Button";
import { getUser } from "../../api/getUser";
import { countFeedback } from "../../api/countFeedback";
import { countDiscount } from "../../api/countDiscount";
import { useEffect, useState } from "react";
import { store } from "../../redux/Store";
import {deleteUser} from "../../redux/Slices/userSlice";
import ProfileCard from "../../components/profilecard/ProfileCard";
import { recentFeedback } from "../../api/recentFeedback";
import { recentDiscount } from "../../api/recentDiscount";

const ProfileScreen = () =>{
    const [name,setName]=useState('')
    const [feedback,setFeedback]=useState('')
    const [discount,setDiscount]=useState('')
    const[userRecentFeedback,setUserRecentFeedback]=useState('')
    const[userRecentDiscount,setUserRecentDiscount]=useState('')
    const [load,setLoad]=useState(true)

    let userId=store.getState().user.id
    const user = async () =>{
        const response=await getUser(userId);
        if(response.status=='success'){
            setName(response.data.name)
        }
    }
    const userInfo = async () =>{
        const responseFeedback=await countFeedback(userId);
        const responseDiscount=await countDiscount(userId);
        const responseRecentFeedback=await recentFeedback(userId);
        const responseRecentDiscount=await recentDiscount(userId)    
        setFeedback(responseFeedback.data)
        setDiscount(responseDiscount.data)
        setUserRecentFeedback(responseRecentFeedback)
        setUserRecentDiscount(responseRecentDiscount)
        setLoad(false)
    }
    
    useEffect(()=>{
        user()
        userInfo()
    },[])
    
    const logout = ()=>{
        store.dispatch(deleteUser())
    }

    return(
        <View style={styles.profile}>
            <Text style={styles.user}>{name}</Text>
            <ScrollView style={styles.scroll} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userInfo}/>}>
                <View style={styles.box}>
                    <ProfileBox name='Feedback' value={feedback} />
                    <ProfileBox name='Discount' value={discount} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Recent Feedback</Text>
                    <ProfileCard name={userRecentFeedback}/>
                    <Text style={styles.title}>Recent Discount</Text>
                    <ProfileCard name={userRecentDiscount} />
                </View>
            </ScrollView>
            <View style={styles.button}>
                <Button text='Logout' onPress={logout}/>
            </View>    
        </View>
    )
}

export default ProfileScreen;