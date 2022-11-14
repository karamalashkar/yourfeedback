import { Image, ScrollView } from "react-native";
import { styles } from "./style";
import { DiscountBox } from "../../components/box/Box";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDiscount } from "../../api/getDiscount";
import { useState,useEffect } from "react";

const DiscountScreen = () =>{
    const [data,setData]=useState('')
    const [discount,setDiscount]=useState('')
    useEffect(()=>{
        const discount=async () =>{
            const business_id=await AsyncStorage.getItem('id');
            const response=await getDiscount(business_id);
            if(response.status=='failde'){
                setData(false)
                return null
            }
            setData(true)
            setDiscount(response.data)
        }

        discount();
    },[])

    if (!data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView>
            {Object.values(discount).map((discount)=>{
                return(
                    <DiscountBox name={discount.business.name} value={`${discount.value}%`} code={discount.code} />
                )
            })}
        </ScrollView>
    )
}

export default DiscountScreen;