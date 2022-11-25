import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    component:{
        display: 'flex',
        alignItems: 'center'
    },
    box:{
        width: 150,
        height: 120,
        display: 'flex',
        alignItems: 'center',
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    },
    head:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: colors.red,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    value:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
})