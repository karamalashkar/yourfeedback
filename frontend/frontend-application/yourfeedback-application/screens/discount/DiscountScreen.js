import { RefreshControl, Image, ScrollView } from "react-native";
import { styles } from "./style";
import { DiscountBox } from "../../components/box/Box";
import { getDiscount } from "../../api/getDiscount";
import { useState,useEffect } from "react";
import { store } from "../../redux/Store";

const DiscountScreen = () =>{
    const [data,setData]=useState('')
    const [discount,setDiscount]=useState('')
    const [load,setLoad]=useState(true)

    const userDiscount=async () =>{
        let userId=store.getState().user.id
        const response=await getDiscount(userId);
        if(response.status=='failed' || response.data.length==0){
            setData(false)
            return null
        }
        setData(true)
        setDiscount(response.data)
        setLoad(false)
    }

    useEffect(()=>{    
        userDiscount();
    },[])

    if (!data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView refreshControl={<RefreshControl 
            refreshing={load} onRefresh={userDiscount}/>} >
            {Object.values(discount).map((discount,index)=>{
                return(
                    <DiscountBox key={index} name={discount.business.name} value={`${discount.value}%`} code={discount.code} />
                )
            })}
        </ScrollView>
    )
}

export default DiscountScreen;