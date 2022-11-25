import { View, Text } from "react-native";
import { styles } from "./style";

const Bar = (props) =>{
    return(
        <View style={styles.component}>
            <View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}

export default Bar;