const Answer = (props)=>{
    return(
        <div className="flex-col my-4">
            <p>{props.question}</p>
            <p className='font-bold'>{props.response}</p>
        </div>
    )
}

export default Answer;