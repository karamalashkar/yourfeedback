import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Question from "../../components/question/Question";
import { getQuestion } from "../../api/getQuestion";
import { useEffect, useState } from "react";

const FormScreen = ({route}) =>{
    const businessId=route.params.id;
    const categoryId=route.params.category_id;
    const [question,setQuestion]=useState('')
    const result={}
    useEffect(()=>{
        const getFeedbackQuestion = async () =>{
            const response=await getQuestion(categoryId);
            setQuestion(response)
        }

        getFeedbackQuestion();
    },[])
    
    //ordering each question with its id and answer
    {Object.values(question).map((question,index)=>{
        result[index]={'question_id':question.id,'question':question.question,'response':''}
    })}

    return(
        <View style={styles.form}>
            <Text style={styles.marketName}>{route.params.name}</Text>
            <ScrollView style={styles.content}>
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