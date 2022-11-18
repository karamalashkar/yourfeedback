import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    button:{
        width: '90%',
        height: 45,
        padding: 10,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: colors.red
    },
    text:{
        textAlign: 'center',
        fontSize: 16,
        color: colors.white
    }
})