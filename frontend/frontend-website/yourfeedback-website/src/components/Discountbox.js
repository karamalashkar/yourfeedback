const Discountbox = (props)=>{
    return(
        <div className="flex flex-col h-48 mx-4 mb-8 bg-white rounded-xl shadow-2xl w-3/4 sm:w-2/4 lg:w-1/4">
            <div className="flex flex-col items-center">
                <h1 className="my-4 text-3xl text-red-700 font-bold">{props.value}%</h1>
                <h1 className="mt-2 text-xl">{props.name}</h1>
                <h1 className="mt-2 text-lg font-bold">{props.code}</h1>
                <h1 className="mt-2 text-lg">{props.use}</h1>
            </div>
            
        </div>    
    )
}

export default Discountbox;