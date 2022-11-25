import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    component:{
        width: '100%',
        height: 180,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        borderTopRightRadius: 20,
    },
    image:{
        width: 160,
        height: 160,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    info:{
        height: 160,
        width: 160,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    text:{
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    location:{
        marginTop: 8,
        marginLeft: 15,
        opacity: 0.5,
        fontSize: 14
    },
    button:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    press:{
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 10,
        backgroundColor: 'lightgrey'
    },
})