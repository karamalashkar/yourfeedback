import { View, Text } from "react-native";
import { styles } from "./style";

const ProfileCard = (props) =>{
    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

export default ProfileCard;