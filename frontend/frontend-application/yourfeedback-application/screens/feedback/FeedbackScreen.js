import { RefreshControl, Image, ScrollView } from "react-native";
import { styles } from "./style";
import { FeedbackBox } from "../../components/box/Box";
import { useEffect, useState } from "react";
import { getFeedback } from "../../api/getFeedback";
import { store } from "../../redux/Store";

const FeedbackScreen = () =>{
    const [data,setData]=useState('')
    const [feedback,setFeedback]=useState('')
    const [load,setLoad]=useState(true)

    const userFeedback=async () =>{
        let userId=store.getState().user.id
        const response=await getFeedback(userId);
        if(response.status=='failed' || response.data.length==0){
            setData(false)
            return null
        }
        setData(true)
        setFeedback(response.data)
        setLoad(false)
    }

    useEffect(()=>{    
        userFeedback();
    },[])

    if (!data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView refreshControl={<RefreshControl 
        refreshing={load} onRefresh={userFeedback}/>} >
            {Object.values(feedback).map((feedback,index)=>{
                return(
                    <FeedbackBox key={index} name={feedback[0].business.name} date={feedback[0].created_at.substring(0,10)} />
                )
            })}
        </ScrollView>
    )
}

export default FeedbackScreen;