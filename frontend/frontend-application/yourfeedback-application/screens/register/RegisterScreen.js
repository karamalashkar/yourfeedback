import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const RegisterScreen = () =>{
    return(
        <View style={styles.component}>
            <Image source={require('../.././assets/logo.png')} style={styles.image}/>
            <Text style={styles.text}>Sign Up</Text>
            <Input placeholder='Name' state={false}/>
            <Input placeholder='Email' state={false}/>
            <Input placeholder='Password' state={true}/>
            <Button text='Signup' />
        </View>        
    )
}

export default RegisterScreen;