const Answer = (props)=>{
    return(
        <div className="my-4 mx-8">
            <p className="flex">{props.question}</p>
            <p className='font-bold'>{props.response}</p>
        </div>
    )
}

export default Answer;