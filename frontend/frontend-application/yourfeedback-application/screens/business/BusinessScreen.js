import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Button from "../../components/button/Button";

const BusinessScreen = (props) =>{
    return(
        <View>
            <Image source={require('../../assets/market.jpg')} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.body}>{props.body}</Text>
                <Button text='Feedback' />
            </View>
        </View>
    )
}

export default BusinessScreen;