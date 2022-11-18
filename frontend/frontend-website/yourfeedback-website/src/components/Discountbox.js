const Discountbox = (props)=>{
    return(
        <div className="flex flex-col items-start justify-around h-48 mx-4 mb-8 bg-white rounded-xl shadow-2xl w-3/4 sm:w-2/4 lg:w-1/4">
            <h1 className="text-2xl font-bold ml-8">{props.code}</h1>
            <h1 className="text-xl font-bold ml-8">{props.name}</h1>
            <h1 className="text-2xl font-bold ml-8">{props.value}%</h1>
            <h1 className="text-xl font-bold ml-8">{props.use}</h1>
        </div>    
    )
}

export default Discountbox;