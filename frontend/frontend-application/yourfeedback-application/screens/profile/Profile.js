import { Text, View } from "react-native";
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
    useEffect(()=>{
        let userId=store.getState().user.id
        const user = async () =>{
            const response=await getUser(userId);
            if(response.status=='success'){
                setName(response.data.name)
            }
        }
        const getCountFeedback=async () =>{
            const response=await countFeedback(userId);
            if(response.status=='success'){
                setFeedback(response.data)
            }else{
                setFeedback('0')
            }
        }
        const getCountDiscount=async () =>{
            const response=await countDiscount(userId);
            if(response.status=='success'){
                setDiscount(response.data)
            }else{
                setDiscount('0')
            }
        }

        user();
        getCountFeedback();
        getCountDiscount();
    },[])
    
    const logout = ()=>{
        store.dispatch(deleteUser())
    }

    return(
        <View style={styles.profile}>
            <Text style={styles.user}>{name}</Text>
            <View style={styles.box}>
                <ProfileBox name='Feedback' value={feedback} />
                <ProfileBox name='Discount' value={discount} />
            </View>
            <Button text='Logout' onPress={logout}/>
        </View>
    )
}

export default ProfileScreen;