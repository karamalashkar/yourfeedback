import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    search:{
        width: '100%',
        height: 70,
        borderBottomWidth: 3,
        borderBottomColor: colors.grey
    },
    input:{
        width: '100%',
        height: 70,
        padding: 10,
        fontSize: 16,
    }    
})