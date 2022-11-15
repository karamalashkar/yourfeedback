import { Image, ScrollView, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import Search from "../../components/search/Search";
import Card from "../../components/card/Card";
import * as Location from 'expo-location';

const HomeScreen = () =>{
    const navigation=useNavigation();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        (async () => {
            //ask for location permission
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const latitude=location.coords.latitude;
            const longitude=location.coords.longitude;        
        })

        ();
    }, []);

    const data=true;
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
            <ScrollView style={styles.scroll}>
                <Card name='Market' onPress={()=>navigation.push('Business')} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;