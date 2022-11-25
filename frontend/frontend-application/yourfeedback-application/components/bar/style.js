import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { Dimensions } from "react-native";
const width=Dimensions.get('window').width;

export const styles = StyleSheet.create({
    component:{
        width: width,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
    },
    text:{
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold'
    }
})