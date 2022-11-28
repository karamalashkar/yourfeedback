import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        width: '100%',
        alignItems: 'center'
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
        color: colors.red
    },    
    form:{
        width: '100%'
    },
    text:{
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
})