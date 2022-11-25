import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles=StyleSheet.create({
    input:{
        width: '100%',
        height: 45,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: 'grey',
        fontSize: 16,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 5,
    },
    error:{
        color: colors.red,
        fontSize: 14,
    }
})    

