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

const DiscountBox = (props) =>{
    return(
        <View style={styles.component}>
            <View style={styles.box}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.value}</Text>
                <Text style={styles.text}>{props.code}</Text>
            </View>
        </View>
    )
}

export { FeedbackBox,DiscountBox };