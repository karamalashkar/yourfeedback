import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { searchBusinessByName } from "../../api/searchBusiness";
import SearchItem from "../../components/searchItem/SearchItem";

const SearchScreen = () =>{
    const [business,setBusiness]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const searchBusiness = async(text)=>{
        if(!text){
            setErrorMessage('')
            setBusiness('')
            return null
        }
        const result=await searchBusinessByName(text);
        if(result.status=='failed'){
            setErrorMessage('')
            setBusiness('')
        }

        if(result.data.length==0){
            setErrorMessage(`No results for ${text}`)
            setBusiness('')
            return null
        }
        setErrorMessage('')
        setBusiness(result.data)
    }

    return(
        <>
        <View>
            <View style={styles.search} >
                <TextInput placeholder="Search" style={styles.input} selectionColor={colors.red}
                onChangeText={ text => searchBusiness(text)} />
            </View>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <ScrollView>
                {Object.values(business).map((business)=>{
                    return(
                        <SearchItem key={business.id} image={{uri:business.image}} name={business.name} />
                    );
                })}
            </ScrollView>
        </View>    
        </>
    ) 
}

export default SearchScreen;