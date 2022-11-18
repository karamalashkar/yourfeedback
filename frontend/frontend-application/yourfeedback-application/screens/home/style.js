import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles=StyleSheet.create({
    scroll:{
        width: '100%',
        height: '90%'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    search:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderBottomColor: colors.grey
    },
    searchText:{
        marginLeft: 15,
        fontSize: 16
    }
})