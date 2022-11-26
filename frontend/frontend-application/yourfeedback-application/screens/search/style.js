import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    search:{
        alignItems: 'center'
    },
    input:{
        width: '92%',
        padding: 12,
        marginTop: 20,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.grey
    },
    errorMessage:{
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.grey
    }    
})