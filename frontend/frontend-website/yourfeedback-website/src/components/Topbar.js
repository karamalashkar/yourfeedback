const Topbar = (props) =>{
    return(
        <div className="flex item-start w-4/5 h-20">
            <h1 className="text-4xl font-bold mx-16 my-4">{props.text}</h1>
        </div>
    )
}

export default Topbar;