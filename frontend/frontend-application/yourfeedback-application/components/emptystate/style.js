import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors" 

export const styles = StyleSheet.create({
    component:{
        alignItems: 'center',
        height: '100%'
    },
    state:{
        height: 550,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width: '50%'
    },
    text:{
        marginTop: 10,
        color: colors.red
    }
})