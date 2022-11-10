import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    popup:{
        marginTop: '50%',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        position: 'absolute'
    },
    content:{
        width: '90%',
        alignItems: 'center',
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
        marginTop: 10,
        fontSize: 20
    },
    error:{
        marginTop: 10,
        color: colors.red
    },
    input:{
        width: '60%',
        marginTop: 10,
        padding: 10,
        borderBottomColor: colors.grey
    },
    button:{
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    buttonText:{
        color: colors.white,
        fontSize: 16
    },
    continueButton:{
        width: '30%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red
    },
    backButton:{
        width: '30%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.grey
    }
}) 