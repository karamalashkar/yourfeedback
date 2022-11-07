import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles=StyleSheet.create({
    input:{
        width: '90%',
        height: 45,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        fontSize: 16,
    },
    error:{
        color: colors.red,
        fontSize: 14
    }
})    

