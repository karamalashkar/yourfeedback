import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    question:{
        fontSize: 18
    },
    input:{
        width: '75%',
        fontSize: 14,
        marginTop: 5,
        outlineStyle: 'none',
        borderBottomWidth: 2,
        borderBottomColor: colors.grey
    },
})