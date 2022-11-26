const Input = (props) =>{
    return(
        <>
            <input type={props.type} 
            placeholder={props.text}
            onChange={e => props.setValue(e.target.value)}
            onFocus={() => props.setError('')}
            className='w-3/5 p-3 my-2 border border-gray-300 outline-none bg-white rounded-lg' />   
        </> 
    )
}

export default Input;