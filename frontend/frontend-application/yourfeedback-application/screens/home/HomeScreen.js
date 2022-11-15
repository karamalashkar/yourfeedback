import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import Search from "../../components/search/Search";
import Card from "../../components/card/Card";
import * as Location from 'expo-location';
import { getBusiness } from "../../api/getBusiness";

const HomeScreen = () =>{
    const navigation=useNavigation();
    const [data,setData]=useState('')
    const [business,setBusiness]=useState('')
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        (async () => {
            //ask for location permission
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                return;
            }

            setErrorMessage('');
            let location = await Location.getCurrentPositionAsync({});
            const latitude=location.coords.latitude;
            const longitude=location.coords.longitude;
            const response=await getBusiness(latitude,longitude);
            if(response.data.length==0){
                setData(false)
                return null
            }

            setData(true)
            setBusiness(response.data)        
        })

        ();
    }, []);

    if (!data)
        return (
            <>
                <Search />
                <Image source={require('../../assets/data.png')} style={styles.image}/>
            </>
        )
    
    return(
        <View style={styles.home}>
            <Search />
            <Text>{errorMessage}</Text>
            <ScrollView style={styles.scroll}>
            {Object.values(business).map((business,index)=>{
                return(
                    <Card key={index} image={business.image} 
                    name={business.name} onPress={()=>navigation.push('Business',{
                        id: business.id,
                        image: business.image,
                        name: business.name,
                        bio: business.bio,
                        category_id: business.category_id,
                        feedback_code: business.feedback_code
                    })} />    
                )
            })}
                
            </ScrollView>
        </View>
    )
}

export default HomeScreen;