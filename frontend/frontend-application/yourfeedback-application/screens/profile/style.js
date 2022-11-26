import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    profile:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    user:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 30,
        maxWidth: '85%'
    },
    scroll:{
        width: '100%'
    },
    box:{
        width: '100%',
        marginTop: 10,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    info:{
        marginLeft: 24
    },
    title:{
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    button:{
        width: '80%',
        display: 'flex',
        justifyContent: 'center'
    },
})