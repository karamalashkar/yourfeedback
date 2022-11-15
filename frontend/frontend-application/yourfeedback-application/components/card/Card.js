import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

const Card = (props) =>{
    return(
        <Pressable style={styles.card} onPress={props.onPress}>
            <View style={styles.content}>
                <Image source={props.image} style={styles.image} />
                <Text style={styles.text} >{props.name}</Text>
            </View>    
        </Pressable>
    )
}

export default Card;