import { RefreshControl, Image, ScrollView, Text, View } from "react-native";
import FeedbackCard from "../../components/feedbackcard/FeedbackCard";
import { useEffect, useState } from "react";
import { getFeedback } from "../../api/getFeedback";
import { store } from "../../redux/Store";
import EmptyState from "../../components/emptystate/EmptyState";

const FeedbackScreen = () =>{
    const [feedback,setFeedback]=useState('')
    const [load,setLoad]=useState(true)

    const userFeedback=async () =>{
        let userId=store.getState().user.id
        const response=await getFeedback(userId);
        if(response.status=='failed' || response.data.length==0){
            setFeedback('')
            setLoad(false)
            return null
        }
        setFeedback(response.data)
        setLoad(false)
    }

    useEffect(()=>{    
        userFeedback();
    },[])

    if(!feedback){
        return(
            <ScrollView refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userFeedback}/>} >
                <EmptyState text={'No Available Data'} />
            </ScrollView>            
        )
    }

    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userFeedback}/>} >
                {Object.values(feedback).map((feedback,index)=>{
                    return(
                        <FeedbackCard key={index} name={feedback[0].business.name} 
                        date={feedback[0].created_at.substring(0,10)} 
                        data={feedback}/>
                    )
                })}
            </ScrollView>
        </>
    )
}

export default FeedbackScreen;