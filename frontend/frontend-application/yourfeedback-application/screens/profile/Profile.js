import { Text, View } from "react-native";
import { ProfileBox } from "../../components/box/Box";
import { styles } from "./style";
import Button from "../../components/button/Button";

const ProfileScreen = () =>{
    return(
        <View style={styles.profile}>
            <Text style={styles.user}>Karam Al Ashkar</Text>
            <View style={styles.box}>
                <ProfileBox name='Feedback' value='12' />
                <ProfileBox name='Discount' value='7' />
            </View>
            <Button text='Edit Profile'/>
            <Button text='Logout'/>
        </View>
    )
}

export default ProfileScreen;