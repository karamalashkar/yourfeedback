import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    body:{
        alignItems: 'center',
        width: '90%',
        height: '90%'
    },
    image:{
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    errorMessage:{
        color: colors.red,
        textAlign: 'center',
        marginBottom: 16
    },
    form:{
        width: '100%'
    },
    text:{
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
        width: '100%',
        height: 68,
    },
    footerText:{
        color: colors.white,
        fontWeight: 'bold'
    }
})