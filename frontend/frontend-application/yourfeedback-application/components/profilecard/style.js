import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    card:{
        width: '93%',
        height: 60,
        marginBottom: 15,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    text:{
        marginLeft: 10,
        fontSize: 16,
    }
})