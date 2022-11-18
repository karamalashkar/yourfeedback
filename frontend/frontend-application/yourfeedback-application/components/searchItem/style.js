import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    card:{
        width: '100%',
        alignItems: 'center',
    },
    content:{
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderBottomWidth: 2,
        borderBottomColor: colors.grey
    },
    image:{
        width: 65,
        height: 60,
        marginLeft: 10,
        borderRadius: 50
    },
    text:{
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})