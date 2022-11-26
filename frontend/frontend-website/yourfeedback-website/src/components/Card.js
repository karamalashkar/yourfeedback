import Answer from './Answer';

const Card = (props) =>{
    return(
        <>
        <div className="h-auto mb-8 bg-white rounded-xl shadow-2xl w-4/5 sm:w-3/4 md:w-3/4 xl:w-2/5">
            <div className="flex-col items-start">
                <div className="w-full h-16 bg-red-700 rounded-tr-lg rounded-tl-lg flex items-center justify-between">
                    <h1 className="text-white text-xl font-bold mx-8">{props.name}</h1>
                    <h1 className="text-white text-xl font-bold mx-8">{props.date}</h1>
                </div>    
                {Object.values(props.data).map((data)=>{
                    return(
                        <Answer question={data.question.question} response={data.answer} />
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Card;
