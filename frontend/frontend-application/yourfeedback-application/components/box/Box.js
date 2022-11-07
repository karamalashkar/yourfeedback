import { View, Text } from "react-native";
import { styles } from "./style";

const FeedbackBox = (props) =>{
    return(
        <View style={styles.component}>
            <View style={styles.box}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.date}</Text>
            </View>
        </View>
    )
}

export { FeedbackBox };