import { Text, TextInput, View, Pressable } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./style";

const Popup = (props) =>{
    if(!props.open){
        return null
    }
    return(
        <View style={styles.popup}>
            <View style={styles.content}>
                <Text style={styles.text}>Enter feedback code</Text>
                <Text style={styles.error}>{props.error}</Text>
                
                <TextInput placeholder="Code"
                selectionColor={colors.red} 
                style={styles.input} 
                onChangeText={(text)=>props.setValue(text)} />
                
                <View style={styles.button}>
                    <Pressable style={styles.continueButton} onPress={props.continue}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                    <Pressable style={styles.backButton} onPress={props.back}>
                        <Text style={styles.buttonText}>Back</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Popup;