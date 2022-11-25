import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    component:{
        width: '100%',
        alignItems: 'center'
    },
    card:{
        width: '90%',
        marginTop: 20,
        marginBottom: 10,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    info:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexBasis: '70%',
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '30%'
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15
    },
    date:{
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 15
    },
    press:{
        width: '80%',
        alignItems: 'center'
    },
    pressText:{
        fontSize: 36,
        marginLeft: 40
    }
})