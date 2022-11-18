import { TextInput, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/colors";
import { searchBusinessByName } from "../../api/searchBusiness";

const SearchScreen = () =>{
    const searchBusiness = async(text)=>{
        const result=await searchBusinessByName(text);
        console.log(result)
    }

    return(
        <View style={styles.search} >
            <TextInput placeholder="Search" style={styles.input} selectionColor={colors.red}
            onChangeText={ text => searchBusiness(text)} />
        </View>
    ) 
}

export default SearchScreen;