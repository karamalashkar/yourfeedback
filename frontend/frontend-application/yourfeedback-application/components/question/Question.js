import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/colors";

const Question = (props) =>{
    return(
        <View style={styles.component}>
            <Text style={styles.question}>{props.question}</Text>
            <TextInput 
            style={styles.input} 
            selectionColor={colors.red} 
            multiline={true}
            numberOfLines={3}
            maxLength={150}
            autoFocus={false}
            onChangeText={(text)=>props.setValue(text)}/>
        </View>
    )
}

export default Question;