import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    button:{
        width: '100%',
        height: 45,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: colors.red
    },
    text:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white
    }
})