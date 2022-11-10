import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    component:{
        display: 'flex',
        alignItems: 'center'
    },
    box:{
        width: '80%',
        height: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 20,
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
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})