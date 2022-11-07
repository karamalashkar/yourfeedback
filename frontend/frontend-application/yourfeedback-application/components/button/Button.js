import { Pressable, Text } from "react-native";
import { styles } from "./style";

const Button = (props) =>{
    return(
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}

export default Button;