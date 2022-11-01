const Input = (props) =>{
    return(
        <>
            <input type={props.type} 
            placeholder={props.text}
            onChange={e => props.setValue(e.target.value)} 
            className='w-1/2 p-3 my-2 border-2 border-black rounded-xl' />   
            <br/>
        </> 
    )
}

export default Input;