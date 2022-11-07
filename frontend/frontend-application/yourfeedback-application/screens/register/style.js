import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        width: '100%',
        alignItems: 'center'
    },
    image:{
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    text:{
        fontSize: 32,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center',
    },
    error:{
        color: colors.red
    }
})