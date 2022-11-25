import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Answer from "../answer/Answer";
import { styles } from "./style";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedbackCard = (props)=>{
    const [isOpen,setIsOpen]=useState(false)
    const [icon,setIcon]=useState('keyboard-arrow-down')
    const openFeedbackForm=()=>{
        if(isOpen){
            setIcon('keyboard-arrow-down')
            setIsOpen(false)
            return null
        }
        setIcon('keyboard-arrow-up')
        setIsOpen(true)
    }
    return(
        <View style={styles.component}>
            <View style={styles.card}>
                <View style={styles.head}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.date}>{props.date}</Text>
                    </View>
                    <View style={styles.button}>
                        <Pressable style={styles.press} onPress={openFeedbackForm}>
                            <Text style={styles.pressText}><MaterialIcons name={icon} size={30}/></Text>
                        </Pressable>
                    </View>    
                </View>
                <View style={styles.response}>
                {(props.data).map((data,index)=>{
                    if(!isOpen){
                        return null
                    }
                    return(
                        <>
                        <Answer key={index} question={data.question.question} response={data.answer} />
                        </>
                    )
                })}
                </View>
            </View>
        </View>
    )
}

export default FeedbackCard;