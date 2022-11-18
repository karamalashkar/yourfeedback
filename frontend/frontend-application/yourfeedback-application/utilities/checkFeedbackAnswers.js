var discountValue=0;

const helpfulWords=['great','important','crazy','make','adjust','increase','improve','impressed','excellent','better'];

//check feedback answers
const checkFeedbackAnswer = async(userId, businessId, data) =>{
    {Object.values(data).map((data)=>{
        //check if answers contains helpful words
        var words=data.response.split(' ');
        for(let i in words){
            if(helpfulWords.includes(words[i])){
                discountValue+=0.75
            }
        }
    })}
}

export default checkFeedbackAnswer;