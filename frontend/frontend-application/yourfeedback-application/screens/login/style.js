import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    body:{
        width: '100%',
        height: '92%',
        alignItems: 'center'
    },
    image:{
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    text:{
        margin: 20,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorMessage:{
        color: colors.red
    },
    footer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.red,
    },
    footerText:{
        color: colors.white
    }
})