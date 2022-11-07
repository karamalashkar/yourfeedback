import { Image, Pressable, Text } from "react-native";
import { styles } from "./style";

const Card = (props) =>{
    return(
        <Pressable style={styles.card} onPress={props.onPress}>
            <Image source={require('../../assets/market.jpg')} style={styles.image} />
            <Text style={styles.text} >{props.name}</Text>
        </Pressable>
    )
}

export default Card;