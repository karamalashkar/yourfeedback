import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import Card from "../../components/card/Card";
import * as Location from 'expo-location';
import { getBusiness } from "../../api/getBusiness";

const HomeScreen = () =>{
    const navigation=useNavigation();
    const [data,setData]=useState('')
    const [business,setBusiness]=useState('')
    const [locationPermission,setLocationPermission]=useState('')
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        const home = async() => {
            //ask for location permission
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLocationPermission('')
                setErrorMessage('Permission to access location was denied');
                return;
            }

            setErrorMessage('');
            setLocationPermission('done')
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
        }

        home();
    }, []);

    if (!data){
        if(!locationPermission){
            return(
                <>
                    <Pressable style={styles.search} onPress={()=>navigation.push('Search')}>
                        <Text style={styles.searchText}>Search</Text>
                    </Pressable>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </>
            )    
        }

        return (
            <>
                <Pressable style={styles.search} onPress={()=>navigation.push('Search')}>
                    <Text style={styles.searchText}>Search</Text>
                </Pressable>
                <Image source={require('../../assets/data.png')} style={styles.image}/>
            </>
        )
    }
    
    return(
        <View style={styles.home}>
            <Pressable style={styles.search} onPress={()=>navigation.push('Search')}>
                <Text style={styles.searchText}>Search</Text>
            </Pressable>
            <ScrollView style={styles.scroll}>
            {Object.values(business).map((business,index)=>{
                return(
                    <Card key={index} image={{uri: business.image}} 
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