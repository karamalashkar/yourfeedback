import { Text, View } from "react-native";
import { styles } from "./style";

const Answer = (props) =>{
    return(
        <View style={styles.component}>
            <Text style={styles.question}>{props.question}</Text>
            <Text style={styles.response}>{props.response}</Text>
        </View>
    )
}

export default Answer;