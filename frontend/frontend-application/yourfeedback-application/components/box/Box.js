import { View, Text } from "react-native";
import { styles } from "./style";

const ProfileBox = (props) =>{
    return(
        <View style={styles.component}>
            <View style={styles.box}>
                <View style={styles.head}>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
                <Text style={styles.value}>{props.value}</Text>
            </View>
        </View>
    )
}

export default ProfileBox;