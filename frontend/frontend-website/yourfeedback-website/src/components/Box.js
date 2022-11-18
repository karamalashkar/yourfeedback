const Box = (props) =>{
    return(
        <div className="flex flex-col items-center justify-around bg-white rounded-xl shadow-2xl w-3/4 h-44 mb-4 sm:w-2/4 lg:w-1/4">
            <h1 className="text-4xl font-bold">{props.text}</h1>
            <h1 className="text-4xl font-bold">{props.value}</h1>
        </div>
    )
}

export default Box;
