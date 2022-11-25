import { Text, View } from "react-native";
import { styles } from "./style";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../constants/colors";

const EmptyState = (props) =>{
    return(
        <View style={styles.component}>
            <View style={styles.state}>
                <Text style={styles.icon}><FontAwesome5 name={"exclamation-triangle"} size={100} color={colors.red}/></Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}

export default EmptyState;