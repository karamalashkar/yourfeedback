const Discountbox = (props)=>{
    return(
        <div className="flex flex-col items-center justify-around h-44 mx-4 mb-8 bg-white rounded-xl shadow-2xl w-3/4 sm:w-2/4 lg:w-1/4">
            <h1 className="text-2xl font-bold">{props.name}</h1>
            <h1 className="text-2xl font-bold">{props.value}%</h1>
            <h1 className="text-xl font-bold">{props.code}</h1>
        </div>    
    )
}

export default Discountbox;