import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    popup:{
        marginTop: '50%',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 10,
    },
    content:{
        width: '90%',
        alignItems: 'center',
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
        marginTop: 16,
        fontSize: 20
    },
    message:{
        opacity: 0.5,
        fontSize: 12,
        maxWidth: '70%'
    },
    error:{
        marginTop: 5,
        color: colors.red
    },
    input:{
        width: '73%',
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        borderBottomWidth: 2,
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    continueButton:{
        width: '30%',
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red
    },
    backButton:{
        width: '30%',
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.grey
    }
}) 