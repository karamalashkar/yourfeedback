const Box = (props) =>{
    return(
        <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-2xl w-3/4 h-40 mb-4 sm:w-2/4 lg:w-1/4">
            <div className="w-full h-16 bg-red-700 rounded-tr-lg rounded-tl-lg flex items-center justify-center">
                <h1 className="text-2xl font-bold text-white">{props.text}</h1>
            </div>
            <h1 className="text-4xl font-bold mb-6">{props.value}</h1>
        </div>
    )
}

export default Box;
