import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    form:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    errorMessage:{
        color: colors.red,
        marginTop: 10
    },
    content:{
        width: '100%',
        height: '90%',
        marginTop: 20,
    },
    button:{
        alignItems: 'center'
    },
    press:{
        width: '60%',
        height: 45,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: colors.red
    },
    text:{
        color: colors.white,
        fontWeight: 'bold'
    }
})
