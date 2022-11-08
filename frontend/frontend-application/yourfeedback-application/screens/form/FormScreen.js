import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Question from "../../components/question/Question";

const FormScreen = (props) =>{
    return(
        <View style={styles.form}>
            <Text style={styles.marketName}>{props.name}</Text>
            <ScrollView style={styles.content}>
                <Question />
                <View style={styles.button}>
                    <Pressable style={styles.press}>
                        <Text style={styles.text}>Submit</Text>
                    </Pressable>
                </View>     
            </ScrollView>
        </View>
    )
}

export default FormScreen;