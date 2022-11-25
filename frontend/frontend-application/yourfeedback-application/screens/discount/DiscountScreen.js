import { RefreshControl, ScrollView } from "react-native";
import { styles } from "./style";
import { getDiscount } from "../../api/getDiscount";
import { useState,useEffect } from "react";
import { store } from "../../redux/Store";
import DiscountCard from "../../components/discountcard/DiscountCard";
import EmptyState from "../../components/emptystate/EmptyState";

const DiscountScreen = () =>{
    const [discount,setDiscount]=useState('')
    const [load,setLoad]=useState(true)

    const userDiscount=async () =>{
        let userId=store.getState().user.id
        const response=await getDiscount(userId);
        if(response.status=='failed' || response.data.length==0){
            setDiscount('')
            setLoad(false)
            return null
        }
        setDiscount(response.data)
        setLoad(false)
    }

    useEffect(()=>{    
        userDiscount();
    },[])
    
    if(!discount){
        return(
            <ScrollView refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userDiscount}/>} >
                <EmptyState text={'No Available Data'} />
            </ScrollView>            
        )
    }
    
    return(
        <>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl 
                refreshing={load} onRefresh={userDiscount}/>} >
                {Object.values(discount).map((discount,index)=>{
                    return(
                        <DiscountCard key={index} name={discount.business.name} value={`${discount.value}%`} code={discount.code} />
                    )
                })}
            </ScrollView>
        </>
    )
}

export default DiscountScreen;