import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    card:{
        width: '90%',
        height: 180,
        marginTop: 20,
        marginBottom: 20,
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
    image:{
        width: '100%',
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text:{
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})