import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    component:{
        width: '100%',
        alignItems: 'center'
    },
    card:{
        width: '90%',
        height: 150,
        marginBottom: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    head:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.red,
    },
    name:{
        marginLeft: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white
    },
    body:{
        marginTop: 20,
        marginLeft: 16,
        display: 'flex',
        flexDirection: 'column'
    },
    item:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 16,
        marginRight: 10
    },
    value:{
        right: 18,
        fontSize: 16,
        fontWeight: 'bold',
    },
    
})