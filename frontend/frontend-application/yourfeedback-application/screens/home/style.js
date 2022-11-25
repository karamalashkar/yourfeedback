import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    title:{
        margin: 16,
        fontSize: 24,
        fontWeight: 'bold'
    },
    scroll:{
        width: '100%',
        height: '90%'
    },
    errorMessage:{
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        color: colors.grey
    }
})