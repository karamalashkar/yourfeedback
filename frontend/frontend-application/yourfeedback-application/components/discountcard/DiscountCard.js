import { View, Text } from "react-native";
import { styles } from "./style";

const DiscountCard = (props) =>{
    return(
        <View style={styles.component}>
        <View style={styles.card}>
            <View style={styles.head}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.item}>
                    <Text style={styles.title}>Value</Text>
                    <Text style={styles.value}>{props.value}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>Discount Code</Text>
                    <Text style={styles.value}>{props.code}</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

export default DiscountCard;