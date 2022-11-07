import { Image, ScrollView } from "react-native";
import { styles } from "./style";
import { DiscountBox } from "../../components/box/Box";

const DiscountScreen = () =>{
    const data=true;
    if (data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView>
            <DiscountBox name='Market' value='12%' code='12345' />
        </ScrollView>
    )
}

export default DiscountScreen;