import { Image, ScrollView, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Search from "../../components/search/Search";
import Card from "../../components/card/Card";

const HomeScreen = () =>{
    const navigation=useNavigation();
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