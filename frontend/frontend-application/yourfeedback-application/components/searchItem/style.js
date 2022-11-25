import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    card:{
        width: '100%',
        alignItems: 'center',
    },
    content:{
        marginLeft: 10,
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 55,
        height: 55,
        marginLeft: 10,
        borderRadius: 10
    },
    text:{
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})