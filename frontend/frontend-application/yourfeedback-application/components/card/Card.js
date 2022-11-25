import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

const Card = (props) =>{
    return(
            <View style={styles.component}>
                <Image source={props.image} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.text} >{props.name}</Text>
                    <Text style={styles.location}>{props.location}</Text>
                    <View style={styles.button}>
                    <Pressable style={styles.press} onPress={props.onPress}>
                        <Text>View</Text>
                    </Pressable>
                    </View>
                </View>
            </View>    
    )
}

export default Card;