import { Image, ScrollView, View } from "react-native";
import { styles } from "./Style";
import Search from "../../components/search/Search";
import Card from "../../components/card/Card";

const HomeScreen = () =>{
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
                <Card name='Market' />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;