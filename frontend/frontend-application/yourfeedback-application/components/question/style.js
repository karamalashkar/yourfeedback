import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        alignItems: 'center'
    },
    content:{
        padding: 20,
        width: '90%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: colors.white,
        borderRadius: 10
    },
    question:{
        fontSize: 18,
        width: '90%'
    },
    input:{
        width: '90%',
        fontSize: 14,
        marginTop: 5,
        outlineStyle: 'none',
        borderBottomWidth: 1,
        borderBottomColor: colors.grey
    },
})