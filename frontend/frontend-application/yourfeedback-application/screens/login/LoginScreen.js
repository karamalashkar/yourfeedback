import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const LoginScreen = () =>{
    return(
        <View style={styles.component}>
            <Image source={require('../.././assets/logo.png')} style={styles.image}/>
            <Text style={styles.text}>Give me your Feedback</Text>
            <Input placeholder='Email' state={false} />
            <Input placeholder='Password' state={true} />
            <Button text='Login' />
            <Pressable>
                    <Text>Don't have an account? Join Now</Text>
            </Pressable>
        </View>    
    )
}

export default LoginScreen;