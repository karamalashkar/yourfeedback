import Answer from './Answer';

const Card = (props) =>{
    return(
        <>
        <div className="h-auto mb-8 bg-white rounded-xl shadow-2xl w-4/5 sm:w-3/4 md:w-3/4 xl:w-2/5">
            <div className="flex-col items-start mx-8">
                <h1 className="text-2xl font-bold pt-4">{props.name}</h1>
                <h1 className="text-xl font-bold">{props.date}</h1>
                <Answer />
            </div>
        </div>
        </>
    )
}

export default Card;
