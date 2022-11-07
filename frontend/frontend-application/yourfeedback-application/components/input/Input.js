import { Text, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./style";

const Input = (props) =>{
    return(
        <>
            <TextInput style={styles.input} 
            placeholder={props.placeholder}
            selectionColor={colors.red}
            secureTextEntry={props.state} 
            onChangeText={ text => props.setValue(text)}/>
            <Text style={styles.error}>{props.errorMessage}</Text>
        </>
    )
}

export default Input;