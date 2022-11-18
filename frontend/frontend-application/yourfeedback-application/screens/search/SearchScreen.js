import { TextInput, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/colors";

const SearchScreen = () =>{    
    return(
        <View style={styles.search} >
            <TextInput placeholder="Search" style={styles.input} selectionColor={colors.red} />
        </View>
    ) 
}

export default SearchScreen;