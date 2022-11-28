import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import Question from "../../components/question/Question";
import { getQuestion } from "../../api/getQuestion";
import { addFeedback } from "../../api/addFeedback";
import { useEffect, useState } from "react";
import { store } from "../../redux/Store";
import checkFeedbackAnswer from "../../utilities/checkFeedbackAnswers";

const FormScreen = ({route}) =>{
    const navigation=useNavigation();
    const businessId=route.params.id;
    const categoryId=route.params.category_id;
    const businessName= route.params.name;
    const [question,setQuestion]=useState('')
    const [answerOne,setAnswerOne]=useState('')
    const [answerTwo,setAnswerTwo]=useState('')
    const [answerThree,setAnswerThree]=useState('')
    const [answerFour,setAnswerFour]=useState('')
    const [answerFive,setAnswerFive]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
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

    const submitFeedback = async() =>{
        if(!answerOne || !answerTwo || !answerThree || !answerFour || !answerFive){
            setErrorMessage('Fill all required responses')
            return null
        }
        //getting all entered responses
        let userId=store.getState().user.id
        result[0].response=answerOne
        result[1].response=answerTwo
        result[2].response=answerThree
        result[3].response=answerFour
        result[4].response=answerFive
        const response=await addFeedback(userId,businessId,result)
        checkFeedbackAnswer(userId,businessId,result,businessName)
        navigation.push('Home')
    }

    //check results before sending it to question component
    if(Object.keys(result).length==0){
        return null
    }

    return(
        <View style={styles.form}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <ScrollView style={styles.content}>
                <Question question={result[0].question} setValue={setAnswerOne}/>
                <Question question={result[1].question} setValue={setAnswerTwo}/>
                <Question question={result[2].question} setValue={setAnswerThree}/>
                <Question question={result[3].question} setValue={setAnswerFour}/>
                <Question question={result[4].question} setValue={setAnswerFive}/>    
                <View style={styles.button}>
                    <Pressable style={styles.press} onPress={submitFeedback}>
                        <Text style={styles.text}>Submit</Text>
                    </Pressable>
                </View>     
            </ScrollView>
        </View>
    )
}

export default FormScreen;