import { Image, ScrollView } from "react-native";
import { styles } from "./style";
import { FeedbackBox } from "../../components/box/Box";

const FeedbackScreen = () =>{
    const data=true;
    if (!data)
        return (
            <Image source={require('../../assets/data.png')} style={styles.image}/>
        )
    return(
        <ScrollView>
            <FeedbackBox name='Market' date='DD-MM-YYYY'/>
        </ScrollView>
    )
}

export default FeedbackScreen;