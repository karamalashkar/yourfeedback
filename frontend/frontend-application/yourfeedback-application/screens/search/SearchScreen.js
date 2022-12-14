import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { searchBusinessByName } from "../../api/searchBusiness";
import SearchItem from "../../components/searchItem/SearchItem";
import { useNavigation } from "@react-navigation/native";
import { imageBaseURL } from "../../api/base";

const SearchScreen = () =>{
    const navigation=useNavigation();
    const [business,setBusiness]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const [data,setData]=useState(false)
    const searchBusiness = async(text)=>{
        setData(true)
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
            setErrorMessage(`Oops! \n No results for ${text}`)
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
                <TextInput placeholder="Markets, Medical Center, Gym ..." style={styles.input} selectionColor={colors.red}
                onChangeText={ text => searchBusiness(text)} />
            </View>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <ScrollView>
                {Object.values(business).map((business)=>{
                    return(
                        <SearchItem key={business.id} image={business.image? {uri: `${imageBaseURL}${business.image}`}:require('../../assets/market.jpg')} name={business.name} onPress={()=>navigation.push('Business',{
                            id: business.id,
                            name: business.name, 
                            bio: business.bio,
                            category_id: business.category_id,
                            image: business.image,
                            feedback_code: business.feedback_code                 
                        })}/>
                    );
                })}
            </ScrollView>
        </View>    
        </>
    ) 
}

export default SearchScreen;