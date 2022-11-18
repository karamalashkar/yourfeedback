import { View, TextInput } from "react-native";
import { styles } from "./style";

const Search = () =>{
    return(
        <View style={styles.search}>
            <TextInput placeholder="Search" style={styles.input}/>
        </View>
    )
}

export default Search;