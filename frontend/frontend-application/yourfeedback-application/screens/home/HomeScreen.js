import { RefreshControl, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import Card from "../../components/card/Card";
import * as Location from 'expo-location';
import { getBusiness } from "../../api/getBusiness";
import EmptyState from "../../components/emptystate/EmptyState";
import { imageBaseURL } from "../../api/base";

const HomeScreen = () =>{
    const navigation=useNavigation();
    const [business,setBusiness]=useState('')
    const [locationPermission,setLocationPermission]=useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [load,setLoad]=useState(true)

    const home = async() => {
        //ask for location permission
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setLocationPermission('')
            setErrorMessage('Permission to access location was denied');
            return null;
        }

        setErrorMessage('');
        setLocationPermission('done')
        let location = await Location.getCurrentPositionAsync({});
        const latitude=location.coords.latitude;
        const longitude=location.coords.longitude;
        const response=await getBusiness(latitude,longitude);
        if(response.data.length==0){
            setErrorMessage('No Available Data')
            setLoad(false)
            setBusiness('')
            return null
        }

        setBusiness(response.data)
        setLoad(false)
    }

    useEffect(() => {    
        home();
    }, []);

    if(!business){
        if(!locationPermission){
            return(
                <ScrollView refreshControl={<RefreshControl 
                    refreshing={load} onRefresh={home}/>} >
                        <EmptyState text={errorMessage} />
                </ScrollView>
            )    
        }
        return(
            <ScrollView refreshControl={<RefreshControl 
                refreshing={load} onRefresh={home}/>} >
                    <EmptyState text={'No Available Data'} />
            </ScrollView>            
        )
    }
    
    return(
        <View>
            <Text style={styles.title}>Nearby Places</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={home}/>} >
            {Object.values(business).map((business,index)=>{
                return(
                    <Card key={index} image={business.image?{uri: `${imageBaseURL}${business.image}`}:require('../../assets/market.jpg')} 
                    name={business.name} location={business.location} onPress={()=>navigation.navigate('Business',{
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