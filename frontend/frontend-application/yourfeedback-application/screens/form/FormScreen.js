import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Question from "../../components/question/Question";
import { getQuestion } from "../../api/getQuestion";
import { useEffect, useState } from "react";

const FormScreen = ({route}) =>{
    const businessId=route.params.id;
    const categoryId=route.params.category_id;
    const [question,setQuestion]=useState('')
    useEffect(()=>{
        const getFeedbackQuestion = async () =>{
            const response=await getQuestion(categoryId);
            setQuestion(response)
        }

        getFeedbackQuestion();
    },[])
    

    return(
        <View style={styles.form}>
            <Text style={styles.marketName}>{route.params.name}</Text>
            <ScrollView style={styles.content}>
                {Object.values(question).map((question,index)=>{
                    return(
                        <Question key={index} question={question.question} />    
                    )
                })}
                <View style={styles.button}>
                    <Pressable style={styles.press}>
                        <Text style={styles.text}>Submit</Text>
                    </Pressable>
                </View>     
            </ScrollView>
        </View>
    )
}

export default FormScreen;